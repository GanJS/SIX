/**
 * Created by Administrator on 2016/8/8.
 */
//������ȥ�����ֱ���ٻ�����С����ɫ��Ϊ�ٻ�
$(function () {
    //������a����
    $(".header-nav .item").mouseenter(function () {
        $(this).css("color"," #5C5F68");
    });
    $(".header-nav .item").mouseleave(function () {
        $(this).css("color","#eee");
    });


    //������input
    var inpval = $(".search input").val();
    $(".search input").focus(function () {
        $(this).attr("value","");
    })
    $(".search input").blur(function () {
        $(this).attr("value",inpval);
    })

    //������APP
    $(".appitem .downloadApp").mouseenter(function () {
        $(".appitem .imgcode").stop().fadeIn(400);
        $(".appitem .border-sup").stop().fadeIn(400);
    })
    $(".appitem .downloadApp").mouseleave(function () {
        $(".appitem .imgcode").stop().hide();
        $(".appitem .border-sup").hide();
    })




})