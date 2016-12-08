$(function () {
    //获取元素
    var jclass = $(".class-main");
    var cl = $(".class-main")[0];
    var mr = $(".class-main-r");
    var jw = $("main-w");
    var w = jw[0];
    var he = $(".header");
    var one = $(".class-main-one");
    var im = $(".img")[0];
    var divt = $(".div-t").children("img");
    var nav = $(".nav")[0];
    var mic = $(".micro")[0];
    var g = $(".g-flow");
    var a = g.find("a");
    var p = g.find("p");
    var foo = $(".footer");
    var xn = $(".xnh");
    var ww = $(".wrap");
    var arr = $("#arr");
    var mb = $(".m-bar");
    var bot = $(".footer");
    var bar = $(".bar");
    var dtt = $("#dtt");
    var w = $(".w");
    var gimg = g.find("img");
    console.log(gimg);
    //初始化所需的值

    var Cw = jclass[0].offsetWidth;
    var Ch = jclass[0].offsetHeight;
    var fooh = foo[0].offsetHeight;
    var Gh = g[0].offsetHeight;
    var nl = nav.offsetLeft;
    var mbw = mb[0].offsetWidth;
    cl.style.height = 0;
    g[0].style.height = 0;
    mb[0].style.width = 0
    var winw = window.screen.width;
    nav.style.left = window.screen.width + "px";
    mic.style.left = -window.screen.width + "px";
    foo.css("position", "relative");
    foo[0].style.left = window.screen.width + "px";
    //调用jq方法
    // one.slideUp(1000,function(){
    //     one.slideDown(500);
    // });
    // mr.slideUp(1000,function(){
    //     mr.slideDown(500);
    // });

    he.fadeOut(500);
    he.fadeIn(2000)
    one.hide();
    mr.hide();
    a.hide();
    p.hide();
    ww.hide()
    mb.find("img").hide();
    mb.find("a").hide();
    mb.find("p").hide();
    mb.find("h2").hide();
    g.find("img").hide();
//调用函数
    start(im);
    zint(divt);
    xnh(xn[0]);
    startMovee(nav, 'left', nl, function () {
        one.slideUp(1000, function () {
            one.slideDown(500);
        });
        mr.slideUp(1000, function () {
            mr.slideDown(500);
        });

        ww.slideUp(1000, function () {
            ww.slideDown(500);
        });


        document.ondblclick = function () {
            he.fadeOut(2000);
            startMovee(nav, 'left', -winw, function () {
                startMovee(nav, 'left', winw, function () {
                    $(nav).hide();
                    one.hide();
                    mr.hide();
                    ww.hide();
                    startMovee(cl, 'height', 0, function () {
                        arr.hide();
                        startMovee(mic, 'height', 0, function () {
                            $(mic).hide();
                            startMovee(g[0], 'height', 0, function () {
                                g.find("img").hide();
                                g.find(a).hide();
                                g.find(p).hide();
                                startMovee(mb[0], 'height', 0, function () {
                                    startMovee(mb[0], 'width', 0, function () {
                                        mb.find("img").slideUp(500);
                                        mb.find("a").hide();
                                        mb.find("p").hide();
                                        mb.find("h2").hide();
                                        bar.slideUp(500);
                                        startMovee(bot[0], 'height', 0, function () {
                                        bot.hide();
                                        dtt.show();
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        }
        startMovee(cl, 'height', Ch, function () {
            startMovee(mic, 'left', nl, function () {
                a.show();
                p.show();
                g.find("img").show(2000);
                startMovee(g[0], 'height', Gh, function () {
                    startMovee(foo[0], 'left', nl, function () {
                        mb.find("img").fadeOut(4000);
                        mb.find("img").fadeIn(4000);
                        mb.find("a").fadeOut(4000);
                        mb.find("a").fadeIn(4000);
                        mb.find("p").fadeOut(4000);
                        mb.find("p").fadeIn(4000);
                        mb.find("img").show(1000);
                        mb.find("a").show(1000);
                        mb.find("p").show(1000);
                        startMovee(mb[0], 'width', mbw,function(){
                            foo.find("img").fadeOut(2000);
                            foo.find("img").fadeIn(2000);
                            startMovee(foo[0], 'height', 0, function () {
                                startMovee(foo[0], 'height', fooh);
                            })
                        })

                    });
                });
            });
        });
    });
        gimg.mouseenter(function(){
            $(this).fadeOut(700);
            $(this).fadeIn(700);
        })

    mb.find("img").mouseenter(function(){
        $(this).fadeOut(700);
        $(this).fadeIn(700);
    })
});


