# Hoverboard Electron-React-Redux Starter App

Hoverboard is a starter app for building electron apps using React and Redux. It comes complete with example code, bootstrap, and font awesome built in, and a built in system for 
customizable alert, confirm, and custom modal boxes based on Boostrap modals.

## Using Electron

This app is built using Electron, to get more info see the following: [Quick Start Guide](http://electron.atom.io/docs/latest/tutorial/quick-start) within the Electron documentation.

## Get Started

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/RadioSystems/hoverboard.git

# Go into the repository
cd Hoverboard

# For the simplest experience in installing depencies and running the app locally in windows, use powershell to execute the included build script.
open powershell

./build.ps1

npm start

# If you do not use the included build script, you can just use npm and the pre-configured npm scripts
npm install

# Run in Production mode
After one of the above steps to install dependencies is complete, and config file is copied, type "npm start" to run your electron app in production mode. 
Production mode will build a minified version of the React UI and load electron.

#Run in Dev mode
To run in dev mode, type "npm run dev". This will create a *Hot Module Reloading* enabled version of the webpack build and launch electron.

Learn more about Electron and its API in the [documentation](http://electron.atom.io/docs/latest).

#To run unit tests
npm run test
```

## App distribution and Auto Updates
The hoverboard repo is enabled out of the box to build an NSIS based windows installer. Simply run either the powershell script with a target of package or the dist npm script.

```bash
# powershell
./build.ps1 -Target package

# npm script
npm run dist
``` 

This will create a *dist* folder that contains an installer *Setup.exe* file and a *latest.yml* file. Launch the generated *Setup.exe* to install the app to your computer.

To distribute the application, and enable auto updates. Copy the generated *Setup.exe* and *latest.yml* to the http hosting environment of your choice (we use [Azure Blob Storage](https://azure.microsoft.com/en-us/services/storage/blobs/)).
Set the *build.publish.url* property in the development package.json to the url of the hosted setup and latest.yml files.

**NOTE** you must set the *build.publish.url* property before building and packaging your app in order for auto updates to work.

**NOTE** you must roll the version number in your app *package.json* file to achieve useful auto update results. You can manage app versioning in whatever way fits your build/deployment pipeline.

### Installation customization
There is an included NSIS script that can be used to customize your install and uninstall if you choose to use it. The file can be found in *build/installer.nsh*
For more info on options for this script, see the [NSIS docs](http://nsis.sourceforge.net/Main_Page)

### Building for other OS platforms
This repo is configured out of the box to build for windows systems. To build for other platforms, you will need an appropriate build environment, and you can refer to the 
[electron-builder docs](https://github.com/electron-userland/electron-builder) for more info.

## Required Installations If You use native node modules
If your app requires native node modules that need to be built on windows, you must first download the following items, then run the build script or npm scripts:

* [Python 2.7.x](https://www.python.org/downloads/release/python-2711/) match the bitness of your OS.
* [Visual C++ Compiler for Python 2.7](https://www.microsoft.com/en-us/download/details.aspx?id=44266)
* Visual C++ for Visual Studio 2015 - Modify your VS installation to include it.
* [Windows 8.1 SDK](https://developer.microsoft.com/en-us/windows/downloads/windows-8-1-sdk)
