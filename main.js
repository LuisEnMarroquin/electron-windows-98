const { app, BrowserWindow } = require('electron')
require('@electron/remote/main').initialize()

function createWindow () {
  const win = new BrowserWindow({ // Create the browser window.
    width: 600,
    height: 200,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  })
  win.loadFile('index.html') // and load the index.html of the app.
  win.webContents.openDevTools() // Open the DevTools.
}

// This method will be called when Electron has finished initialization and is ready to create browser windows.
app.whenReady().then(createWindow) // Some APIs can only be used after this event occurs.

app.on('window-all-closed', () => { // Quit when all windows are closed, except on macOS. There, it's common for applications and their menu bar to stay active until the user quits explicitly with Cmd + Q.
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) { // On macOS it's common to re-create a window in the app when the dock icon is clicked and there are no other windows open.
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process code. You can also put them in separate files and require them here.
