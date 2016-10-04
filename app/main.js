const mainEvents = require("./mainEvents.js");
const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;

//Handle squirrel/autoupdate events first
if (require("electron-squirrel-startup")) {
    return;
}
if (handleSquirrelEvent()) {
    // squirrel event handled and app will exit in 1000ms, so don't do anything else
    return;
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

app.on('ready', initializeApp);
app.on('window-all-closed', handleOsxWindowClose);
app.on('activate', handlOsxWindowCreation);

function initializeApp() {
    createWindow();
    configureIpcEvents();
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
    mainWindow.loadURL('file://' + __dirname + '/ui/index.html');

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

function handleSquirrelEvent() {
    if (process.argv.length === 1) {
        return false;
    }

    const squirrelEvent = process.argv[1];
    if (squirrelEvent == "--squirrel-firstrun") {
        //You can execute first time installation steps here
    }
}

// Uncomment this code to catch global exceptions and handle them appropriately
// process.on("uncaughtException", function(error) {
//     //Global error handler, so that users don't see ugly js exception
//     console.error(error);
// });