  console.log('pimpasos');
var tabs = {};
chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
    if (request.pimpasosCmd) {
        chrome.tabs.getSelected(function (tab) {
            tabs[tab.id] = request.pimpasosCmd;
            runAction(tab.id, request.pimpasosCmd)
        })
    }
});

function runAction(tab, a) {
    console.log(arguments);
    var url = chrome.extension.getURL('js/' + a + '.js');
    var code = "(function(){var e = document.createElement('script'); e.src = " + JSON.stringify(url) +
        ";(document.head || document.documentElement).appendChild(e);" +
        "e.onload = function () {e.parentNode.removeChild(e);};})()";
        console.log({ code: code })
    chrome.tabs.executeScript(tab, { code: code }, function () {})
}
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if ((tabId in tabs) && (changeInfo.status === "complete")) {
        runAction(tabId, tabs[tabId])
    }
})
