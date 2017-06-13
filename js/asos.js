(function () {
    console.log('pimpasos');
    // DOM 2 Events
    var dispatchMouseEvent = function (target, var_args) {
        var e = document.createEvent("MouseEvents");
        // If you need clientX, clientY, etc., you can call
        // initMouseEvent instead of initEvent
        e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1));
        target.dispatchEvent(e);
    };

    function click(element) {
        dispatchMouseEvent(element, 'mouseover', true, true);
        dispatchMouseEvent(element, 'mousedown', true, true);
        dispatchMouseEvent(element, 'click', true, true);
        dispatchMouseEvent(element, 'mouseup', true, true);
    }
    setInterval(function () {
        if (location.href.match(/http\:\/\/(www\.)?asos\.com\/bag.*/i)) {
            var m = document.querySelectorAll('.bag-total-button--checkout')
            if (m.length > 0) {
                console.log('zzzz!!dsfs');
                click(m[0])
            }else{

            }
        }
        location.reload();
    }, 1000 * 60 );
    setTimeout(function () {
        location.reload();
    }, 1000 * 60 * 2);
})();
