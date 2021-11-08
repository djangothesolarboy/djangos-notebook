const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    });
    
    win.loadFile('index.html');
};

app.whenReady().then(() => {
    createWindow();
});