/**
 * Created by Administrator on 2016/8/8.
 */
//鼠标放上去，文字变大再缓慢变小，颜色变为橘黄
$(function () {
    //导航栏a链接
    $(".header-nav .item").mouseenter(function () {
        $(this).css("color"," #5C5F68");
    });
    $(".header-nav .item").mouseleave(function () {
        $(this).css("color","#eee");
    });


    //导航栏input
    var inpval = $(".search input").val();
    $(".search input").focus(function () {
        $(this).attr("value","");
    })
    $(".search input").blur(function () {
        $(this).attr("value",inpval);
    })

    //导航栏APP
    $(".appitem .downloadApp").mouseenter(function () {
        $(".appitem .imgcode").stop().fadeIn(400);
        $(".appitem .border-sup").stop().fadeIn(400);
    })
    $(".appitem .downloadApp").mouseleave(function () {
        $(".appitem .imgcode").stop().hide();
        $(".appitem .border-sup").hide();
    })




})