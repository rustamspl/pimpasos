document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('checkout')
        .addEventListener('click', function () {
            chrome.extension.sendRequest({ pimpasosCmd: 'checkout' }, function () {});
        });
    document.getElementById('add')
        .addEventListener('click', function () {
            chrome.extension.sendRequest({ pimpasosCmd: 'add' }, function () {});
        });
});
