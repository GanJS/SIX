/**
 * Created by lx on 2016/8/10.
 */

window.onload = function () {
    var all = document.getElementById("topbanner-all");
    var screen = document.getElementById("topbanner-all-screen");
    var ul = screen.children[0];
    var ol = screen.children[1];
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var imgwidth = screen.offsetWidth;
    var timer = null;

    var newLi = ul.children[0].cloneNode(true);
    ul.appendChild(newLi);
    var imgArr = ul.children;

    for (var i = 0; i < imgArr.length - 1; i++) {
        var olLi = document.createElement("li");
        olLi.innerHTML = i + 1;
        ol.appendChild(olLi);
    }
    var olLiarr = ol.children;
    olLiarr[0].className = "current";
    for (var i = 0; i < olLiarr.length; i++) {
        olLiarr[i].index = i;
        olLiarr[i].onmouseover = function () {
            for (var j = 0; j < olLiarr.length; j++) {
                olLiarr[j].className = "";
            }
            this.className = "current";
            key = square = this.index;
            animate(-imgwidth * this.index, ul);
        }
    }
    timer = setInterval(autoplay, 3000)
    var key = 0;
    var square = 0;

    function autoplay() {
        key++;
        square++;
        if (square > olLiarr.length - 1) {
            square = 0;
        }
        if (key > imgArr.length - 1) {
            ul.style.left = 0;
            key = 1;
        }
        for (var i = 0; i < olLiarr.length; i++) {
            olLiarr[i].className = "";
        }
        olLiarr[square].className = "current";
        animate(-imgwidth * key, ul);
    }

    all.onmouseenter = function () {
        clearInterval(timer);
    }
    all.onmouseleave = function () {
        timer = setInterval(autoplay, 3000)
    }
    left.onclick = function(){
        key--;
        square--;
        if (square < 0) {
            square = olLiarr.length-1;
        }
        if (key < 0) {
            ul.style.left = -(imgArr.length-1)*imgwidth+"px";
            key = imgArr.length-2;
        }
        for (var i = 0; i < olLiarr.length; i++) {
            olLiarr[i].className = "";
        }
        olLiarr[square].className = "current";
        animate(-imgwidth * key, ul);
    }
    right.onclick = function () {
        autoplay();
    }

}
function animate(target, obj) {
    clearInterval(obj.timer);
    var speed = target - obj.offsetLeft > 0 ? 10 : -10;
    obj.timer = setInterval(function () {
        obj.style.left = obj.offsetLeft + speed + "px";
        if (Math.abs(target - obj.offsetLeft) <= Math.abs(speed)) {
            obj.style.left = target + "px";
            clearInterval(obj.timer);
        }
    }, 10);
}
