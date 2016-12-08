/**
 *
 * @param str
 * @returns {*}
 */
//function $(str){
//    var firstChar = str.charAt(0);
//    if(firstChar === "#"){
//        return document.getElementById(str.slice(1));
//    }else if(firstChar === "."){
//        return document.getElementsByClassName(str.slice(1));
//    }
//    return document.getElementsByTagName(str);
//}

/**
 * 获取参数的第一个子节点
 * @param ele
 * @returns {Element|*|Node}
 */
function getFirstEle(ele){
    return ele.firstElementChild || ele.firstChild;
}

/**
 *
 * @param ele
 * @returns {Element|*|Node}
 */
function getLastEle(ele){
    return ele.lastElementChild || ele.lastChild;
}

/**
 * 获取元素的下一个兄弟节点
 * @param ele
 * @returns {Element|*|Node}
 */
function getNSib(ele){
    return ele.nextElementSibling || ele.nextSibling;
}

/**
 * 获取元素的前一个兄弟节点
 * @param ele
 * @returns {Element|*|Node}
 */
function getPSib(ele){
    return ele.previousElementSibling || ele.previousSibling;
}

/**
 * 获取元素的所有兄弟节点，不包括自己
 * @param ele
 * @returns {Array}
 */
function getAllSib(ele){
    var arr = [];
    var allChild = ele.parentNode.children;
    for(var i=0;i<allChild.length;i++){
        if(allChild[i] != ele){
            arr.push(allChild[i]);
        }
    }
    return arr;
}
/**
 *
 * @type {{addEvent: Function}}
 */
var EventListener = {
    addEvent: function (ele,str,fn) {
        if(ele.addEventListener){
            ele.addEventListener(str,fn);
        }else if(ele.attachEvent){
            ele.attachEvent("on"+str,fn);
        }else{
            ele["on"+str] = fn;
        }
    },
    removeEvent: function (ele,str,fn) {
        if(ele.removeEventListener){
            ele.removeEventListener(str,fn);
        }else if(ele.detachEvent){
            ele.detachEvent("on"+str,fn);
        }else{
            ele["on"+str] = null;
        }
    }
};

//封装
function scroll(){
    return {
        "top": window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
        "left": document.documentElement.scrollLeft + document.body.scrollLeft
    };
}

//缓动动画封装
function animate(obj,target){
    //要用定时器，先清定时器
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        //获取步长，并进行二次加工，大于0向上取整。小于0向下取整
        var step = (target-obj.offsetTop)/10;
        step = step>0?Math.ceil(step):Math.floor(step);
        obj.style.top = obj.offsetTop+step+"px";
        //如果目标位置和盒子自身位置之间的距离小于步长，那么清楚定时器前，先把盒子指定到目标位置
        if(Math.abs(target-obj.offsetTop) < Math.abs(step)){
            obj.style.top = target+"px";
            clearInterval(obj.timer);
        }
    },30);
}