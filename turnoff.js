var triggered = false;

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) 
{
	triggered = false;
   chrome.tabs.query
   (
	   {'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
	   function(tabs)
	   {
	      if(tabs[0].url.indexOf("https://namu.wiki") != -1 & !triggered)
	      {
	      	chrome.tabs.remove(tabs[0].id, function() {alert("꺼라")});
	      	triggered = true;
	      }
	   }
	);
});



chrome.tabs.onCreated.addListener(function(tab) 
{         
	triggered = false;
   chrome.tabs.query
   ({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
	   function(tabs)
	   {
	      if(tabs[0].url.indexOf("https://namu.wiki") != -1 & !triggered)
	      {
	      	chrome.tabs.remove(tabs[0].id, function() {alert("꺼라")});
	      	triggered = true;
	      }
	   }
	);
});
