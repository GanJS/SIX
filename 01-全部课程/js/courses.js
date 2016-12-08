/**
 * Created by KilerMino on 2016/8/9.
 */
$(function () {
    $(".ul-lv1>li").eq(1).click(function () {
        $("span.arrow").show();
        $(".ul-lv2").show();
        $(this).children("a").addClass("ul-lv1-select");
        $(".ul-lv1").children("li").eq(0).removeClass("courses-lv1-all");
    });
    $(".ul-lv1>li:eq(0)").click(function () {
        $("span.arrow").hide();
        $(".ul-lv2").hide();
        $(this).siblings("li").children("a").removeClass("ul-lv1-select");
        $(".ul-lv1").children("li").eq(0).addClass("courses-lv1-all");
    });

    slide(1);

    $(".courses-slide-pg ul li").click(function () {
        $(this).siblings("li").removeClass("current");
        $(this).addClass("current");
        jump($(this).text());
    });
    
    $(".node-list .node-item").mouseenter(function () {
        $(this).find("img").stop().animate({"width":250, "height": 150},400);
    })

    $(".node-list .node-item").mouseleave(function () {
        $(this).find("img").stop().animate({"width":223, "height": 124},400);
    });

});

var current = 1;

var timer = null;

function slide() {
    clearInterval(timer);
    timer = setInterval(function () {
        current++;
        jump(current);
        $(".courses-slide-pg ul li").eq(current-1).addClass("current").siblings("li").removeClass("current");
    }, 3000);
}

function jump(num) {
    current = num;
    var obj = $(".courses-slide img");
    obj.fadeOut(300, function () {
        obj.attr("src", "images/slide" + current + ".jpg").fadeIn(300);
    });
    if (current > 5) {
        current = 1;
    }
}