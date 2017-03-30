// Pure JS:
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {
    // do your things
        chrome.cookies.remove({"url":"https://.intentmedia.net", "name":"chromeExtension"});
  }
})



document.getElementById("homePage").addEventListener("click", function() {
    document.getElementById('validationHomeText').innerHTML = "Please complete a search and hit enter.\nYou will be prompted an alert, please click Stay."
    document.getElementById('validationHomeText').style.backgroundColor = "#f2dede";
    document.getElementById('validationHomeText').style.marginTop = "25px";
    document.getElementById('myDivHome').style.display = 'block';
    chrome.cookies.set({"name":"chromeExtension","url":"https://.intentmedia.net","value":"hitHome=true"},function (cookie){});
    sendMessage('home');
}, false);

document.getElementById("everythingElseList").addEventListener("click", function() {
  chrome.storage.local.clear();
    handler1("validationListText","others","myDivList",'everythingElseList');
}, false);

// The handler also must go in a .js file
function handler(x,y,z,a) {  
chrome.storage.local.clear();
  setTimeout(function() {
    document.getElementById(z).style.display="none";
    //document.getElementById(a).style.display="none";
    document.getElementById(x).innerHTML = '';
    chrome.storage.local.get( function(items) {
      var div = document.getElementById(x);
      var size = Object.keys(items).length;

      if(size < 2){
        div.innerHTML = '<img class=\'goodImage\' src=\'good.png\'>' + "<br> There are no errors!";
      }
      else{
        for(i in items) {
          var yourValue = items[i].value || "empty";
          var msg = items[i].msg;
          var name = items[i].name;
          var type = items[i].type;

          if (items.hasOwnProperty(i) && (name !== "window.IntentMediaProperties, Exit Unit blank page (if applicable), On-Page ads (if applicable)" && name !== 'window.IntentMediaProperties, Exit Unit blank page (if applicable), Search Form Compare (if applicable), IntentMedia.trigger')) {
            div.innerHTML += "<b>" + type + "</b>:" + name + "<br>";
            div.innerHTML += "<b>Expected:</b>" + msg + "<br>";
            div.innerHTML += "<b>Current Value:</b>" + yourValue + "<br>";
            div.innerHTML += "<br><br>";
          }
        }
      }
    });
  }, 2000);
}

function handler1(x,y,z,a) {  

  setTimeout(function() {
    document.getElementById(z).style.display="none";
    //document.getElementById(a).style.display="none";
    document.getElementById(x).innerHTML = '';
    chrome.storage.local.get( function(items) {
      var div = document.getElementById(x);
      var size = Object.keys(items).length;

      if(size < 2){
        div.innerHTML = '<img class=\'goodImage\' src=\'good.png\'>' + "<br> There are no errors!";
      }
      else{
        for(i in items) {
          var yourValue = items[i].value || "empty";
          var msg = items[i].msg;
          var name = items[i].name;
          var type = items[i].type;

          if (items.hasOwnProperty(i) && (name !== "window.IntentMediaProperties, Exit Unit blank page (if applicable), On-Page ads (if applicable)" && name !== 'window.IntentMediaProperties, Exit Unit blank page (if applicable), Search Form Compare (if applicable), IntentMedia.trigger')) {
            div.innerHTML += "<b>" + type + "</b>:" + name + "<br>";
            div.innerHTML += "<b>Expected:</b>" + msg + "<br>";
            div.innerHTML += "<b>Current Value:</b>" + yourValue + "<br>";
            div.innerHTML += "<br><br>";
          }
        }
      }
    });
  }, 2000);
  sendMessage(y);
}

document.getElementById("cookie").addEventListener("click", function() {
    chrome.cookies.set({"name":"force_ads","url":"https://.intentmedia.net","value":"ForceAll=true"},function (cookie){});
    document.getElementById('cookieSet').innerHTML = "A Cookie has been set to force ads for this session";
    document.getElementById('cookieSet').style.backgroundColor = '#dff0d8';
}, false);

function sendMessage (y) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var tab = tabs[0];  // do not forget to declare "tab" variable
    chrome.tabs.sendMessage(tab.id, {
      method: y
    }, function(response){});
  });
}


chrome.cookies.get({"url":"https://.intentmedia.net", "name":"chromeExtension"}, function(cookie) {
    if(cookie) {
      chrome.storage.local.clear();
        handler("validationHomeText","home","myDivHome",'homePage');
        document.getElementById('validationHomeText').style.fontSize = '15px';
        document.getElementById('validationHomeText').style.marginTop = '0px';
        chrome.cookies.remove({"url":"https://.intentmedia.net", "name":"chromeExtension"});
        document.getElementById('homePageNew').style.display = 'block';

    }
});