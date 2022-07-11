// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})

const { contextBridge, ipcRenderer} = require('electron')
const remote = require('@electron/remote');
const { dialog } = remote;
const { BrowserWindow } = remote;
contextBridge.exposeInMainWorld('darkMode', {
  toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
  system: () => ipcRenderer.invoke('dark-mode:system'),
})

contextBridge.exposeInMainWorld('dialog', {
  // show: () =>  ipcRenderer.invoke('dialog:show'),
  // show: () =>  console.log(remote.dialog),
  // show: () =>   dialog.showMessageBox({message : 'Je'}),
  show: () =>  {
    const sacWin =  new BrowserWindow({
      width : 400, height : 500
    })
    sacWin.loadURL('https://w.egybest.bid/season/the-office-season-5/')

    //setTimeout(_ => {
      //sacWin.close()
    //}, 1500)
  }
})