document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('checkout')
        .addEventListener('click', function () {
            chrome.extension.sendRequest({ pimpasosCheckout: 1 }, function () {});
        });
    document.getElementById('add')
        .addEventListener('click', function () {
            chrome.extension.sendRequest({ pimpasosAdd: 1 }, function () {});
        });
});
