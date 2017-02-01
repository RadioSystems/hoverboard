const mainEvents = require("./mainEvents.js");
const electron = require("electron");
const autoUpdater = require("electron-auto-updater").autoUpdater;
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;
const appUpdateActionTypes = require("./ui/action_types/AppUpdateActionTypes.js");

//if its production load phsyical file, if not load from hmr server
const indexUrl = (process.env.NODE_ENV === "development") ? 'http://localhost:3030/index.html' : "file://" + __dirname + "/index.html";

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

app.on('ready', initializeApp);
app.on('window-all-closed', handleOsxWindowClose);
app.on('activate', handlOsxWindowCreation);

function initializeApp() {
    createWindow();
    configureIpcEvents();
    configureNSISUpdates();
}

function createWindow() {
    mainWindow = new BrowserWindow({
        icon: __dirname + "../build/icon.ico",
        width: 1024,
        height: 768,
        resizable: true,
        minWidth: 1024,
        minHeight: 768,
    });
    mainWindow.loadURL(indexUrl);

    mainWindow.webContents.on("did-finish-load", function() {
        console.log("browser window ready!");
        mainWindow.webContents.send(mainEvents.APP_READY);
    });

    mainWindow.on('closed',
        function() {
            console.log("Window Closed. Connections closed. Exiting app...");
            mainWindow = null;
        });
}

function configureIpcEvents() {
    ipcMain.on(mainEvents.EXAMPLE_EVENT, (event, arg) => {
        console.log("example event received!");
        setTimeout(function(){
            mainWindow.webContents.send(mainEvents.EXAMPLE_EVENT);
        }, 1000);
    });
    ipcMain.on(appUpdateActionTypes.INSTALL_APP_UPDATE, () => {
        console.log("Install app update");
        autoUpdater.quitAndInstall();
    });
}

function configureNSISUpdates(){
    try{
        autoUpdater.checkForUpdates();
    }catch(ex){
        console.log("Failed to check for updates, are you running locally?");
    }

    autoUpdater.on("update-downloaded", () => {
        console.log("update downloaded");
        mainWindow.webContents.send(mainEvents.APP_UPDATE_AVAILABLE);
    });

    autoUpdater.on("update-available", () => {
        console.log("APP UPDATE AVAILABLE");
    });

    autoUpdater.on("download-progress", (value) => {
        console.log(JSON.stringify(value));
    });
}

function handlOsxWindowCreation() {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
}

function handleOsxWindowClose() {;
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
}

// Uncomment this code to catch global exceptions and handle them appropriately
// process.on("uncaughtException", function(error) {
//     //Global error handler, so that users don't see ugly js exceptions
//     console.error(error);
// });