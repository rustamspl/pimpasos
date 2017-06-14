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
    var t = 15;

    setInterval(function () {
        --t;
        document.title = t+' PimpAsos Add';
        if (t <= 0) {
                var m = document.querySelectorAll('.add-button')
                if (m.length > 0) {
                    t=15;
                    click(m[0])
                    return;
                } else {
                    location.reload();
                }
                return;
            
            location.reload();
        }
    }, 1000);
})();
