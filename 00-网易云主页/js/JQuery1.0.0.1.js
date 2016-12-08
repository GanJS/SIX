function show(ele){
    ele.style.display = "block";
}
function hide(ele){
    ele.style.display = "none";
}
/**
 *
 * @param str
 * @returns {*}
 */
function $(str){
    var firstChar = str.charAt(0);
    if(firstChar === "#"){
        return document.getElementById(str.slice(1));
    }else if(firstChar === "."){
        return document.getElementsByClassName(str.slice(1));
    }
    return document.getElementsByTagName(str);
}

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


function client(){
    //在一个浏览器中，如果window.innerWidth的值不等于undefined，那么说明这个属性存在
    if(window.innerWidth !== undefined){
        //火狐谷歌IE9+
        return {
            "width": window.innerWidth,
            "height": window.innerHeight
        };
    }else if(document.compatMode === "CSS1Compat"){
        return {
            "width": document.documentElement.clientWidth,
            "height": document.documentElement.clientHeight
        }
    }
    return {
        "width": document.body.clientWidth,
        "height": document.body.clientHeight
    }
}

//自己封装一个能够获取内嵌式和外链式的兼容方法（IE678）
function getStyle(obj,attr){
    //如果浏览器支持该方法，那么返回值是一个字符串，对应的boolean类型值为true
    //否则的话，返回值为undefined，对应的布尔类型值为false；
    if(window.getComputedStyle){
        //变化和变量代表的属性，用[]获取和赋值。
        //而固定的属性，用div.style.width....
        return window.getComputedStyle(obj,null)[attr];
    }
    return obj.currentStyle[attr];
}


//封装缓动框架
function animate(obj,json,fn){
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        //因为我们传递过来的是json，所以我们要用for...in循环来做
        //那么：for循环中的k代表属性(attr)，json[k]代表target.
        var flag = true;
        for(var k in json){
            var leader = parseInt(getStyle(obj,k));
            var step = (json[k] - leader)/10;
            step = step>0?Math.ceil(step):Math.floor(step);
            leader = leader + step;
            obj.style[k] = leader + "px";
            if(leader !== json[k]){
                flag = false;
            }
        }
        console.log(1);
        if(flag){
            clearInterval(obj.timer);
            //走到这，说明，第一个函数执行完毕
            if(fn){
                fn();
            }
        }
    },30);
}