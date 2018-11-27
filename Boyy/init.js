chrome.webRequest.onBeforeRequest.addListener(function(details) 
{
	return {redirectUrl:chrome.extension.getURL("rekt.js")};
}, 
{ urls: ["https://krunker.io/js/rekt.js"] 
}, ["blocking"]);
