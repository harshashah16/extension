function Get(the_url){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", the_url, false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

function onechoice() {
  var url = 'https://yaa25h3ffg.execute-api.us-east-1.amazonaws.com/test1/search?term=';
  var data = JSON.parse(Get(url+document.getElementById("searchKey").value))
  /*chrome.windows.create({url: data['detailUrl']});*/
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tab) {
      chrome.tabs.update(tab.id, {url:data['detailUrl']});
  });
}

document.addEventListener('DOMContentLoaded', function() {
  var goButton = document.getElementById("onesearch");
    goButton.addEventListener("click", function() {
      onechoice()
    }, false);

  document.getElementById("searchKey")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("onesearch").click();
    }
  });
  var filter = {urls: ["<all_urls>"] };
  var opt_extraInfoSpec = [];
  chrome.webRequest.onBeforeRequest.addListener(function() {
    return {cancel: details.url.indexOf("onechoice") != -1};
    document.getElementById("testing").value = details.url;
    document.getElementById("searchKey").value = "Kindle"
    document.getElementById("onesearch").click();
  }, filter, opt_extraInfoSpec;
}, false);