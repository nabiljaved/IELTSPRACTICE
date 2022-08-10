const { BrowserWindow } = require('electron')

class MainWindow extends BrowserWindow {
  constructor(file, isDev) {
    super({
      title: 'SysTop',
      width: isDev ? 800 : 750,
      height: 600,
      icon: `${__dirname}/assets/icons/fourlogo.png`,
      resizable: isDev ? true : false,
      show: false,
      fullscreen :true,
      // opacity: 0.9,
      maximizable:false,
      webPreferences: {
        nodeIntegration: true,
      },
    })

    this.loadURL(file)

    if (isDev) {
      this.webContents.openDevTools()
    }
  }
}

module.exports = MainWindow
