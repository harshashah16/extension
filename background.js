var callback = function(details) {
	alert(details.url);
	alert("wooo1");
    if (details.url.indexof("=onechoice") == -1) {
    	alert("Wohoooo2");
    }
};

var filter = {urls: ["<all_urls>"]};
var opt_extraInfoSpec = [];

chrome.webRequest.onBeforeRequest.addListener(
        callback, filter, opt_extraInfoSpec);