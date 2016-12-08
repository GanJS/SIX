/**
 * Created by Administrator on 2016/8/9 0009.
 */
window.onload= function () {
    var gs =document.getElementById("gs")
    var img = gs.children[0];
    var timer = null,targetx = 0,leaderx= 0,targety = 0,leadery=0;
    document.onmouseover = function (event) {
        event = event || window.event;
        var pagex = event.pageX || event.clientX + scroll().left;
        var pagey = event.pageY || event.clientY + scroll().top;
        clearInterval(timer);
        timer = setInterval(function () {
            leaderx = img.offsetLeft;
            targetx = pagex
            var stepx = (targetx-leaderx)/10;
            stepx = stepx>0?Math.ceil(stepx):Math.floor(stepx);
            leaderx = leaderx + stepx;
            img.style.left = leaderx +"px";
            leadery = img.offsetTop;
            targety = pagey
            var stepy = (targety-leadery)/10;
            stepy = stepy>0?Math.ceil(stepy):Math.floor(stepy);
            leadery = leadery + stepy;
            img.style.top = leadery +"px";

            if(targetx===leaderx && targety===leadery){
                clearInterval(timer);
            }
        },20);
    }
}
