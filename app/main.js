//handle setupevents as quickly as possible
 const setupEvents = require('./installers/setupEvents')
 if (setupEvents.handleSquirrelEvent()) {
    // squirrel event handled and app will exit in 1000ms, so don't do anything else
    return;
 }

const electron = require('electron');
const {shell, app, BrowserWindow} = electron;
const HOMEPAGE = 'https://v2.overleaf.com/project';

let mainWindow;

app.on('ready', () => {
  window = new BrowserWindow({
    width: 1024,
    height: 720,
    webPreferences: {
      nodeIntegration: false
    }
  });
  window.setMenuBarVisibility(false);
  window.loadURL(HOMEPAGE);

  //Handling external urls
  /*window.webContents.on('will-navigate', (ev, url) => {
    parts = url.split('/');
    if(parts[0] + '//' + parts[2] != HOMEPAGE) {
      ev.preventDefault();
      shell.openExternal(url);
    };
  });*/

  window.on('closed', () => {
    window = null;
  });
});
