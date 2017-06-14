(function () {
    console.log('im checkout');
    var dispatchMouseEvent = function (target, var_args) {
        var e = document.createEvent("MouseEvents");
        e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1));
        target.dispatchEvent(e);
    };

    function click(element) {
        dispatchMouseEvent(element, 'mouseover', true, true);
        dispatchMouseEvent(element, 'mousedown', true, true);
        dispatchMouseEvent(element, 'click', true, true);
        dispatchMouseEvent(element, 'mouseup', true, true);
    }
    var t = 60 * 1;
    var state = '';
    if (location.href.match(/https?\:\/\/(www\.)?asos\.com\/bag.*/i)) {
        state = 'bag';
        t = 15;
    }
    if (location.href.match(/https?\:\/\/(secure\.)?asos\.com.*/i)) {
        state = 'secure';
        t = 60 * 45;
    }
    if(!state){
        t=15;
    }
    setInterval(function () {
        --t;
        document.title = t+' PimpAsos Checkout['+state+'] ';
        if (t <= 0) {
            if (state == 'bag') {
                var m = document.querySelectorAll('.bag-total-button--checkout')
                if (m.length > 0) {
                    t=15;
                    click(m[0])
                    return;
                } else {
                    location.reload();
                }
                return;
            }
            window.location.href = 'http://www.asos.com/bag/';
           
        }
    }, 1000);
})();
