$(function () {
   //友情链接分享 开心网   人人网  QQ空间特效
    $(".serBox").hover(
        function () {
            $(this).children().stop(false,true);
            $(this).children(".serBoxOn").fadeIn("slow");
            $(this).children(".pic1").animate({right: -110},400);
            $(this).children(".pic2").animate({left: 64},400);
            $(this).children(".txt1").animate({left: -240},400);
            $(this).children(".txt2").animate({right: 21},400);
        },
        function () {
            $(this).children().stop(false,true);
            $(this).children(".serBoxOn").fadeOut("slow");
            $(this).children(".pic1").animate({right:64},400);
            $(this).children(".pic2").animate({left: -110},400);
            $(this).children(".txt1").animate({left: 21},400);
            $(this).children(".txt2").animate({right: -240},400);
        }
    );
});
