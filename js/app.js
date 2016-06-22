const {ipcRenderer} = require('electron');

ipcRenderer.on('goodbudget', function(event, arg){
    var webView = document.querySelector('webview#goodbudget');
    if (arg == 'add') {
		webView.executeJavaScript('$(".addTransaction").click()');
	} else if (arg == 'import') {
		webView.executeJavaScript('document.getElementById("import-txns").click()');
	} else if (arg == 'loaded') {
		webView.addEventListener("dom-ready", function(){
	  		webView.executeJavaScript('$(".tab-accounts a").click()');
			setTimeout(function(){
		  		webView.executeJavaScript('$("#walkme-player").remove()');
		  	}, 2000);
		});
	}
});