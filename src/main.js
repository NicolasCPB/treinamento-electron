const { app, BrowserWindow } = require('electron')
const electron = require('electron')
require('electron-reload')(__dirname);
function createWindow () {
  const win = new BrowserWindow({
    width: 1024,
    height: 720,
    webPreferences: {
      nodeIntegration: true
    },
    autoHideMenuBar: true,
  })

  win.loadFile('src/app/pages/entrada/pagina1.html')

}

app.whenReady().then(createWindow)




