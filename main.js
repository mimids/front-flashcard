const { app, BrowserWindow } = require('electron');

// from here for aws api
import { Amplify } from 'aws-amplify';
import amplify from './aws-exports';
import Auth from '@aws-amplify/auth';


Amplify.configure(amplify);
// until here for aws api
const { truncate } = require('fs');
const path = require("path");
const url = require('url');
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = true;

let win;
function createWindow() {
    win = new BrowserWindow({
        width: 1200,
        height: 600,
        frame: false,
        transparent:true,
        webPreferences:{nodeIntegration:truncate},
        title:'Flash Card App',

        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: true,
            nodeIntegrationInWorker: true, 
            // useContentSize: true,
            preload: path.join(__dirname, 'preload.js')
        },
        icon: `file://${__dirname}/dist/assets/fuji.png`,
    })

    win.loadFile(path.join(__dirname, `/dist/index.html`));
}
/** Application prête, on charge un  */
app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});