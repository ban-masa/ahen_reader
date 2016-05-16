(function() {
    var flag = 0;
    var urlRegExp = new RegExp('http://dka-hero.com/top.html');
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
        if (tab.url.match(urlRegExp)) {
            chrome.pageAction.show(tabId);
        }
    });
    chrome.pageAction.onClicked.addListener(function(tab){
        chrome.tabs.executeScript(null, { file: "jquery-2.2.3.min.js"},
            function(){
                chrome.tabs.executeScript(null, {file: "script.js"});
            });
    });

    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        switch (request.type) {
            case 'mode':
                mode(request.value, sendResponse);
                break;
            case 'default':
                console.log("wtf");
                console.log(request);
                break;
        }
    });

    function mode(value, callback) {
        flag = 1 - flag;
        callback(flag);
    }

})();
