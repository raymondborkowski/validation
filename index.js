// Pure JS:
document.getElementById("everythingElseList").addEventListener("click", function() {
    handler("validationListText","others","myDivList");
}, false);
document.getElementById("everythingElseDetails").addEventListener("click", function() {
    handler("validationDetailsText","others","myDivDetails");
}, false);
document.getElementById("everythingElseCheckout").addEventListener("click", function() {
    handler("validationCheckoutText","others","myDivCheckout");
}, false);
document.getElementById("everythingElseConfirmation").addEventListener("click", function() {
    handler("validationConfirmationText","others","myDivConfirmation");
}, false);

// The handler also must go in a .js file
function handler(x,y,z) {  
  setTimeout(function() {
    document.getElementById(z).style.display="none";
    document.getElementById(x).innerHTML = '';
    chrome.storage.local.get( function(items) {
      var div = document.getElementById(x);
      var size = Object.keys(items).length;
      if(size < 2){
        div.innerHTML = '<img class=\'goodImage\' src=\'good.png\'>' + "<br> There are no errors!";
      }
      for(i in items) {
        if (items.hasOwnProperty(i)) {
          div.innerHTML = div.innerHTML + "<br>" + (i, items[i].type) + ": " + (i, items[i].name);
        }
      }
    });
  }, 2000);

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var tab = tabs[0];  // do not forget to declare "tab" variable
    chrome.tabs.sendMessage(tab.id, {
      method: y
    }, function(response){});
  });
}