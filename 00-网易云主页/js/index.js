
    window.onload = function () {
        var json = [
            {   //  1
                width:255,
                height: 339,
                opacity:100,
                z:2
            },
            {  // 2
                width:500,
                height: 400,
                opacity:100,
                z:3
            },
            {   // 3
                width:200,
                height: 239,
                opacity:100,
                z:2
            },

        ];
        var slide = document.getElementById("slide");
        var arrow = document.getElementById("arrow");
        var aArr = arrow.children;
        var liArr = slide.getElementsByTagName("li");
        var timer = null;

        var flag = true;
        var a ;
        slide.onmouseover = function () {
            animate(arrow,{"opacity":100});

            clearInterval(timer);
        }
        slide.onmouseout = function () {
            animate(arrow,{"opacity":0});
            clearInterval(timer);
            if (a !=undefined){
                timer = setInterval(function(){
                    move(a );
                },3000)
            }

        }

        move();

        for(var k in aArr){
            aArr[k].onclick = function () {
                if(this.className === "prev"){
                    if(flag){
                        move(true);

                        flag = false;
                        a = true;
                    }

                }
                else{
                    if(flag){
                        move(false);
                        flag = false;
                        a = false;
                    }

                }
            }
        }
        function move(bool){

            if(bool !== undefined){

            }if(bool){

                json.push(json.shift());
            }else{

                json.unshift(json.pop())
            }
            for(var i=0;i<liArr.length;i++){
                animate(liArr[i],{
                    "width":json[i].width,
                    "top":json[i].top,
                    "left":json[i].left,
                    "opacity":json[i].opacity,
                    "zIndex":json[i].z
                }, function () {

                    flag = true;
                });
            }
        }
    }




    function animate(obj,json,fn){
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            for(var k in json){
                var leader = 0;
                //判断，如果是opacity特殊处理，其他属性不变
                if(k === "opacity"){
                    //因为我们获取的opacity是小数值，而小数运算容易出现精度丢失问题
                    //所以我们值转换成整数。(四舍五入取整运算，为什么乘以100，兼容IE678)
                    leader = Math.round(getStyle(obj,k)*100) || 1;
                }else{
                    //给定未给css样式的属性一个默认值为：0；
                    leader = parseInt(getStyle(obj,k)) || 0;
                }
                var step = (json[k]-leader)/10;
                step = step > 0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                if(k === "opacity"){
                    //兼容火狐谷歌IE9+
                    obj.style.opacity = leader/100;
                    //兼容IE678
                    obj.style.filter = "filter: alpha(opacity="+leader+")";
                    //当属性为z-index的时候，不用获取值，一次性赋值。
                }else if(k === "zIndex"){
                    obj.style.zIndex = json[k];
                }else{
                    obj.style[k] = leader + "px";
                }
                if(leader !== json[k]){
                    flag = false;
                }
            }
            if(flag){
                clearInterval(obj.timer);
                if(fn){
                    fn();
                }
            }
        },3);
    }

    function getStyle(obj,attr){
        //如果浏览器支持该方法，那么返回值是一个字符串，对应的boolean类型值为true
        //否则的话，返回值为undefined，对应的布尔类型值为false；
        if(obj.currentStyle){
            //变化和变量代表的属性，用[]获取和赋值。
            //而固定的属性，用div.style.width....
            return obj.currentStyle[attr];
        }
        return window.getComputedStyle(obj,null)[attr];
    }
