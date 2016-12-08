/**
 * 通过id获取元素节点
 * @param id
 * @returns {Element}
 */
function $(str) {
    var firstchar = str.charAt(0);
    if (firstchar === "#") {
        return document.getElementById(str.slice(1));
    }
    else if (firstchar === ".") {
        return document.getElementsByClassName(str.slice(1))
    }
    return document.getElementsByTagName(str);
}

/**
 * 获取参数的第一个子节点
 * @param ele
 * @returns {Element|*|Node}
 */
function getFirstEle(ele) {
    return ele.firstElementChild || ele.firstChild;
}

/**
 *
 * @param ele
 * @returns {Element|*|Node}
 */
function getLastEle(ele) {
    return ele.lastElementChild || ele.lastChild;
}

/**
 * 获取元素的下一个兄弟节点
 * @param ele
 * @returns {Element|*|Node}
 */
function getNSib(ele) {
    return ele.nextElementSibling || ele.nextSibling;
}

/**
 * 获取元素的前一个兄弟节点
 * @param ele
 * @returns {Element|*|Node}
 */
function getPSib(ele) {
    return ele.previousElementSibling || ele.previousSibling;
}

/**
 * 获取元素的所有兄弟节点，不包括自己
 * @param ele
 * @returns {Array}
 */
function getAllSib(ele) {
    var arr = [];
    var allChild = ele.parentNode.children;
    for (var i = 0; i < allChild.length; i++) {
        if (allChild[i] != ele) {
            arr.push(allChild[i]);
        }
    }
    return arr;
}
//兼容浏览器封装
function scroll() {
    return {
        "top": window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
        "left": document.documentElement.scrollLeft + document.body.scrollLeft
    };
}
//缓动动画左移封装
function animate1(target, obj) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        obj.style.left = obj.offsetLeft + step + "px";
        if (Math.abs(target - obj.offsetLeft) < Math.abs(step)) {
            obj.style.left = target + "px";
            clearInterval(obj.timer);
        }
    }, 30)
}
//匀速动画左移封装
function animate2(target, obj) {
    clearInterval(obj.timer);
    var speed = target - obj.offsetLeft > 0 ? 10 : -10;
    obj.timer = setInterval(function () {
        obj.style.left = obj.offsetLeft + speed + "px";
        if (Math.abs(target - obj.offsetLeft) <= Math.abs(speed)) {
            obj.style.left = target + "px";
            clearInterval(obj.timer);
        }
    }, 30)
}

/**
 * Created by lx on 2016/7/29.
 */
