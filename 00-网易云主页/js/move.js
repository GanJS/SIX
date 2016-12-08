/**
 * Created by hp-15 on 2016/7/18.
 */
function show(ele){
    ele.style.display = "block";
}
//获得一个元素的属性
function getStyle (obj,attr) {
    if (obj.currentStyle){
        return obj.currentStyle[attr];
    }
    else {
        return getComputedStyle(obj,false)[attr];
    }
}
//运动函数  fn  回掉函数
function startMovee(obj,attr,iTarget,fn){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
//取当前值
        var icur = 0;
        if (attr == 'opacity'){
            icur = Math.round(parseFloat(getStyle(obj,attr))*100);
        }
        else {
            icur = parseInt(getStyle(obj,attr));
        }
//算速度
        var speed = (iTarget-icur)/8;
        speed = speed>0?Math.ceil(speed):Math.floor(speed);
//检测停止
        if (icur == iTarget){
            clearInterval(obj.timer);
            if (fn){
                fn();
            }
        }
        else {
            if (attr == 'opacity'){
                obj.style.filter = 'alpha:(opacity:"+icur + speed+")';
                obj.style.opacity = (icur +speed)/100;
            }
            else {
                obj.style[attr] = icur + speed +'px';
            }
        }
    },30)
}

function zint (obj) {
    var num = 1;
    var num1 = 0
    setInterval(function() {
        obj.eq(num1).css("z-index",num);
        num1++;
        num++;
        if(num1 >3){
            num1 = 0;
        }
    },2000)
}

function start(obj) {
    var teepx = 8;
    var teepy = 9;

    var im = setInterval(function () {
        var l = obj.offsetLeft + teepx;
        var t = obj.offsetTop + teepy;

        if (t >= document.documentElement.clientHeight - obj.offsetHeight-5){
            teepy *= -1;
            t = document.documentElement.clientHeight - obj.offsetHeight-5;

        }
        else if (t <= 0){
            teepy *= -1;
            t = 0;
        }

        if (l >= document.documentElement.clientWidth - obj.offsetWidth-5){
            l = document.documentElement.clientWidth - obj.offsetWidth-5;
            teepx *= -1;

        }
        else if (l <= 0){
            teepx *= -1;
            l = 0;
        }
//                    console.log(client().height);
//                    console.log(client().width);
        obj.style.left = l +"px";
        obj.style.top = t +"px";
    },30)

}


function xnh(obj) {
    var teep = 0
     setInterval(function () {
        if (obj.offsetLeft < 580){
            teep++;
        }
        else {
            teep--;
        }
        obj.style.left = obj.offsetLeft + teep +"px";
    },30)
}






