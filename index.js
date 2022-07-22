const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
    
    const win = new BrowserWindow({
      minWidth: 500,
      minHeight: 700,
      width: 500,
      height: 700,
      autoHideMenuBar: true,
      transparent: true,
      frame: false,
    })
    win.loadFile('index.html')
    win.setBackgroundColor('rgba(0, 0, 0, 0)')
  }
app.whenReady().then(() => {
    createWindow()
})

