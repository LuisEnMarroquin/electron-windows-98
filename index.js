const { BrowserWindow } = require('@electron/remote') // Retrieve remote BrowserWindow

function init () {
  document.getElementById('min-btn').addEventListener('click', (e) => { // Minimize task
    const window = BrowserWindow.getFocusedWindow()
    window.minimize()
  })
  document.getElementById('max-btn').addEventListener('click', (e) => { // Maximize window
    const window = BrowserWindow.getFocusedWindow()
    if (window.isMaximized()) window.unmaximize()
    else window.maximize()
  })
  document.getElementById('cls-btn').addEventListener('click', (e) => { // Close app
    const window = BrowserWindow.getFocusedWindow()
    window.close()
  })
  document.getElementById('app-status').innerHTML = `We are using node ${process.versions.node}, Chrome ${process.versions.chrome}, and Electron ${process.versions.electron}.`
};

document.onreadystatechange = () => {
  if (document.readyState === 'complete') init()
}
