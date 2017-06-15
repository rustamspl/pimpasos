(function () {
    console.log('im PimpAsos add');
    if(window.PimpAsos){
        console.log('exit');
        return;
    }
    window.PimpAsos=true;
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
    var notfound=true;
    setInterval(function () {
        --t;
        document.title = t+' PimpAsos Add';
        if (t <= 0) {
                var m = document.querySelectorAll('.add-button')
                if (notfound&&m.length > 0) {
                    t=15;
                    click(m[0])
                    notfound=false;
                    return;
                } else {
                    notfound=true;
                    location.reload();
                }
                return;
            
            location.reload();
        }
    }, 1000);
})();
