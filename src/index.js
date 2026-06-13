const {app, BrowserWindow} = require("electron");
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 500,
    icon: path.join(__dirname, 'calculator.png'),
    resizable: false
  });
  win.setMenuBarVisibility(false);
  win.setTitle("Калькулятор");
  win.loadFile("src/index.html");
}

app.whenReady().then(() => createWindow());
app.on("window-all-closed", () => app.quit());
