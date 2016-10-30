const {Menu, MenuItem, app} = remote;

const addTransaction = function() {
  let webView = document.querySelector('webview#goodbudget');
  webView.executeJavaScript('$(".addTransaction").click()');
}
const importTransactions = function() {
  let webView = document.querySelector('webview#goodbudget');
  webView.executeJavaScript('document.getElementById("import-txns").click()');
}

const clickAll = function() {
  let webView = document.querySelector('webview#goodbudget');
  webView.executeJavaScript('$("input[type=checkbox]").each(function() { if(!$(this).attr("checked")) {this.click()}});');
}

var template = [{
    label: "Application",
    submenu: [
        { label: "About Application", selector: "orderFrontStandardAboutPanel:" },
        { type: "separator" },
        { label: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }}
    ]}, {
    label: "Edit",
    submenu: [
        { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
        { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
        { type: "separator" },
        { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
        { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
        { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
        { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" },
        { label: "Toggle DevTools", 
          accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
          click(item, focusedWindow) { focusedWindow.toggleDevTools() }},
    ]}, {
    label: "Manage",
    submenu: [
      { label: "Add Transaction", accelerator: "Shift+CmdOrCtrl+A", click: function() { addTransaction(); }},
      { label: "Import Transactions", accelerator: "Shift+CmdOrCtrl+I", click: function() { importTransactions(); }},
      { label: "Select all Checkboxes", accelerator: "Shift+CmdOrCtrl+S", click: function() { clickAll(); }},
    ]}
];
Menu.setApplicationMenu(Menu.buildFromTemplate(template));
