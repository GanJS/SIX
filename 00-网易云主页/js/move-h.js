/**
 * Created by hp-15 on 2016/7/18.
 */

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
function startMove(obj,json,fn)
{
    var flag = true;
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        for (var attr in json) {
//取当前值
            var icur = 0;
            if (attr == 'opacity') {
                icur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
            }
            else {
                icur = parseInt(getStyle(obj, attr));
            }
//算速度
            var speed = (json[attr] - icur) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
//检测停止
            if (icur != json[attr]) {
                flag = false;

            }

                if (attr == 'opacity') {
                    obj.style.filter = 'alpha:(opacity:"+icur + speed+")';
                    obj.style.opacity = (icur + speed) / 100;
                }
                else {
                    obj.style[attr] = icur + speed + 'px';
                }
            if (flag){
                clearInterval(obj.timer);
                if (fn)
                {
                    fn();
                }
            }
        }
    },50)
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
    },4000)
}