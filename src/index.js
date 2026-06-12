const { app, browserWindow } = require("electron");

function createWindow() {
  const win = browserWindow({
    width: 400,
    height: 500,
  });
  win.setMenuBarVisibility(false);
  win.setTitle("Калькулятор");
  app.loadFile("index.html");
}

app.whenReady().then(() => app.createWindow());
app.on("when-window-close", () => app.quit());
