    /**
     * Created by ºèÇÅÓÄÃÎ on 2016/8/9.
     */
    $(function () {
        $("#teacher").on("mouseenter",function (){
            $("#sanjiao").show();
            $("#sanjiao span").css({"background-color":"red","opacity":.6})
        });
        $("#teacher").on("mouseleave",function (){
            $("#sanjiao").hide();
        });
        var num = 0;
        $("#sanjiao #left").on("click", function () {
            num ++;
            if(num >5){
                num = 0;
            }
            $("#teacher ul").css("margin-left",-400*num);
        });
        //num = 5;
        $("#sanjiao #right").on("click", function () {
                if(num < 0){
                    num = 5;
                }
            $("#teacher ul").css("margin-left",-400*num);
            num --;

        });
        $(".iimg").on("mouseenter", function () {
            $(this).children().css({"width":140,"margin-left":-10});
            $(this).children().css({"height":140,"margin-top":-10});
        });
        $(".iimg").on("mouseleave", function () {
            $(this).children().css({"width":120,"margin-left":0});

            $(this).children().css({"height":120,"margin-top":0});
        });
        $(".ellipses").on("mouseenter", function () {
            $(this).css({"background":"black","opacity":0.4,"color":"#fff"})
        });
        $(".ellipses").on("mouseleave", function () {
            $(this).css({"background":"","color":"#000000"})
        });
        $(".ellipsed").on("mouseenter", function () {
            $(this).css({"color":"#FFCC66"})
        });
        $(".ellipsed").on("mouseleave", function () {
            $(this).css({"color":"#000000"})
        });







        $(".header-nav .item").mouseenter(function () {
            $(this).css("color"," #5C5F68");
        });
        $(".header-nav .item").mouseleave(function () {
            $(this).css("color","#eee");
        });


        //µ¼º½À¸input
        var inpval = $(".search input").val();
        $(".search input").focus(function () {
            $(this).attr("value","");
        })
        $(".search input").blur(function () {
            $(this).attr("value",inpval);
        })

        //µ¼º½À¸APP
        $(".appitem .downloadApp").mouseenter(function () {
            $(".appitem .imgcode").stop().fadeIn(400);
            $(".appitem .border-sup").stop().fadeIn(400);
        })
        $(".appitem .downloadApp").mouseleave(function () {
            $(".appitem .imgcode").stop().hide();
            $(".appitem .border-sup").hide();
        })
    })