// Addins
#addin nuget:?package=Cake.AzureStorage
#addin nuget:?package=WindowsAzure.Storage
#addin nuget:?package=Cake.Npm
#addin nuget:?package=Cake.Powershell
#addin nuget:?package=Cake.Json


//////////////////////////////////////////////////////////////////////
// ARGUMENTS
//////////////////////////////////////////////////////////////////////

var target = Argument("target", "Default");
var configuration = Argument("configuration", "Debug");
var accountName = Argument("accountName", "");
var key = Argument("azureKey", "");
var arch = Argument("arch", "x64");
var container = Argument("container", "");

//////////////////////////////////////////////////////////////////////
// PREPARATION
//////////////////////////////////////////////////////////////////////
var versionNumberEnvironmentVariable = "VERSION_NUMBER";

//////////////////////////////////////////////////////////////////////
// TASKS
//////////////////////////////////////////////////////////////////////


Task("Npm-Install")   
    .IsDependentOn("Clean")
    .Does(() => {
       Npm.RunScript("setupEnv");
       Npm.Install();
       Npm.Install(settings => settings.Package("node-gyp").Globally());
       Npm.RunScript(string.Format("postinstall:{0}", arch));
});

Task("Clean")
    .Does(() => {
        Npm.Install(settings => settings.Package("rimraf"));
        Npm.RunScript("clean");
});

Task("Webpack-Compile")
    .IsDependentOn("Npm-Install")
    .Does(() => {
        Npm.RunScript("compile");
});

Task("Build")
    .IsDependentOn("Npm-Install")
    .IsDependentOn("SetVersion")
    .IsDependentOn("Webpack-Compile");

Task("Package")
    .IsDependentOn("Build")
    .Does(() => {
        Npm.RunScript(string.Format("dist"));
});

Task("SetVersion")
    .Does(() => {
        var newVersion = Environment.GetEnvironmentVariable(versionNumberEnvironmentVariable);
        
        var packageFile = new FilePath("./app/package.json");
    
        var json = DeserializeJsonFromFile<JObject>(packageFile);

        var version = json["version"];

        if(newVersion == null){
            Warning("\nNew version environment variable not found, not setting app version. Are you running build locally?\n");
        }else{
            Information("Setting App Version");
            Information("Old Version " + version.ToString());
            Information("New Version " + newVersion);
            json["version"] = newVersion;
            SerializeJsonToFile<JObject>(packageFile, json);
        }
});

//TODO: configure this task to deploy to azure blob storage
// Task("DeployToAzure")
//     .IsDependentOn("SetVersion")
// 	.Does(() => {
// });


//////////////////////////////////////////////////////////////////////
// TASK TARGETS
//////////////////////////////////////////////////////////////////////

Task("Default")
    .IsDependentOn("Build");

//////////////////////////////////////////////////////////////////////
// EXECUTION
//////////////////////////////////////////////////////////////////////

RunTarget(target);
