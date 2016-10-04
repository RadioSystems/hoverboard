# Hoverboard Electron-React-Redux Starter App

Hoverboard is a starter app for building electron apps using React and Redux. It comes complete with example code, bootstrap and font awesome built in, and a built in systems for 
customizable alert, confirm, and custom modal boxes based on Boostrap modals.

## Using Electron

This app built using Electron, to get more info see the following: [Quick Start Guide](http://electron.atom.io/docs/latest/tutorial/quick-start) within the Electron documentation.

## Get Started

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://bitbucket.org/ifsoftwareteam/ifb-gps-app
# Go into the repository
cd ifb-gps-app
# For the simplest experience in installing depencies and running the app locally, use powershell to execute the included build script.
open powershell

./build.ps1

npm start

# If you do not use the included build script, you can just use npm and the pre-configured npm scripts

# 64 bit system
npm install
npm run postinstall:x64

#32 bit systems
npm install
npm run postinstall:ia32

# Run
After one of the above steps to install dependencies is complete, and config file is copied, type "npm start" to run your electron app

Learn more about Electron and its API in the [documentation](http://electron.atom.io/docs/latest).

# If you want to watch for file changes and let Webpack re-compile:
npm run watch

#To run unit tests
npm run test
```

## Required Installations If You use native node modules
If your app requires native node modules that need to be built on windows, you must first download the following items, then run the build script or npm scripts:

* [Python 2.7.x](https://www.python.org/downloads/release/python-2711/) match the bitness of your OS.
* [Visual C++ Compiler for Python 2.7](https://www.microsoft.com/en-us/download/details.aspx?id=44266)
* Visual C++ for Visual Studio 2015 - Modify your VS installation to include it.
* [Windows 8.1 SDK](https://developer.microsoft.com/en-us/windows/downloads/windows-8-1-sdk)
