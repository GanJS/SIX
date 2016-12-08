/**
 * Created by lx on 2016/8/8.
 */
$(document).ready(function () {
    var json1 = {"width": 155, "height": 155}
    var json2 = {"width": 140, "height": 140}
    $(".img1").mouseenter(function () {
        $(this).animate(json1)
        console.log()
    })
    $(".img1").mouseleave(function () {
        $(this).animate(json2)
        console.log()
    })


    // 导航栏下拉框
    $(" .site-nav-logo-r> ul > li").mouseenter(function () {
        $(this).children("ul").slideDown();
    }).mouseleave(function () {
        $(this).children("ul").slideUp();
    });
    $(" .site-nav-logo-r> ul > li").mouseenter(function () {
        $(this).children("img").fadeIn(500, function () {

        });
    }).mouseleave(function () {
        $(this).children("img").fadeOut(500, function () {
        });
    });
    var current = "";
    //input高亮显示
    $(".site-nav-search>input").focus(function () {
        current = $(this).css("background-color");
        $(this).css("background-color", "white");
    })
    $(".site-nav-search>input").blur(function () {
        $(this).css("background-color", current);
    })

    //侧广告栏

    var img = $("#sitebar-left");
    var home = $("#sitebar-right");
    var num = $(document).scrollTop();
    var timer = null, target = 0, leader = 0;

    window.onscroll = function () {


        //固定导航栏
        if (num > 0) {
            $(".site-nav").css("position", "fixed")
            $(".site-nav").css("top", 0)
        } else {
            $(".site-nav").css("position", "")
            $(".site-nav").css("top", 0)
        }

        //2.页面被卷去多少img向下移动多少
        animate1(scroll().top + 300, img[0]);
        setTimeout(function () {
            img[0].style.display = "none";
        }, 5000);

        if (scroll().top > 100) {
            home[0].style.display = "block";
        } else {
            home[0].style.display = "none";
        }
        //返回顶部
        leader = scroll().top;
        $("#sitebar-right").mouseenter(function () {
            clearInterval(timer);
            timer = setInterval(function () {
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                window.scrollTo(0, leader);
                if (leader === 0) {
                    clearInterval(timer);
                }
            }, 15)
        })
    }


});

function animate1(target, obj) {
    clearInterval(obj.timer)
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetTop) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        obj.style.top = obj.offsetTop + step + "px";
        if (Math.abs(target - obj.offsetTop) < Math.abs(step)) {
            obj.style.top = target + "px";
            clearInterval(obj.timer);
        }
    }, 15)
}

function scroll() {
    return {
        "top": window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
        "left": document.documentElement.scrollLeft + document.body.scrollLeft
    };
}







