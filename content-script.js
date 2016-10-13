//Insert myFunc onto page


// Event listener to get data back from myFunc which was inserted on page
document.addEventListener('SetIt', function(e) {
	chrome.storage.local.clear();
	chrome.storage.local.set(e.detail, function () {
    });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.method == "others") {
    var injectedCode = "window._IntentMediaValidator.validate()";
	var script = document.createElement('script');
	script.appendChild(document.createTextNode('('+ injectedCode +')();'));
	(document.body || document.head || document.documentElement).appendChild(script);
	addMyFunc();
  }
  else if(request.method == "home"){
  	var injectedCode = "window._IntentMediaValidator.validateHomePage()";
	var script = document.createElement('script');
	script.appendChild(document.createTextNode('('+ injectedCode +')();'));
	(document.body || document.head || document.documentElement).appendChild(script);
	addMyFunc();
  }
});

function addMyFunc(){
	setTimeout(function() {
		var s = document.createElement('script');
		s.src = chrome.extension.getURL('myFunc.js');
		(document.head||document.documentElement).appendChild(s);
		s.onload = function() {
		    s.parentNode.removeChild(s);
		};
	}, 1000);
}