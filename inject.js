(function () {
    try {
        var m = {
            asos: /^https?\:\/\/([^\/]+\.)?asos\.com\/.*/i
        }
        var url = window.location.href;
        for (var k in m) {
            if (url.match(m[k])) {
                var e = document.createElement('script');
                e.src = chrome.extension.getURL('js/' + k + '.js');
                (document.head || document.documentElement)
                .appendChild(e);
                e.onload = function () {
                    e.parentNode.removeChild(e);
                };
                break;
            }
        }
    } catch (e) {}
})();
