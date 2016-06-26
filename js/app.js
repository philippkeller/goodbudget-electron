const {ipcRenderer} = require('electron');
const {remote} = require('electron');

ipcRenderer.on('goodbudget', function(event, arg){
  	var webView = document.querySelector('webview#goodbudget');
	if (arg == 'loaded') {
		webView.addEventListener("dom-ready", function(){
	  		webView.executeJavaScript('$(".tab-accounts a").click()');
			setTimeout(function(){
		  		webView.executeJavaScript('$("#walkme-player").remove()');
		  	}, 2000);
		});
	}
});