/**
 * Created by YQ on 2016/12/13.
 */
$(function () {


    //标题部分
    $(".head-nav>ul>li>a").mouseenter(function () {
        $(this).children("i").show().css("color", "#EF4423");
        $(this).children("span").hide();
    });
    $(".head-nav>ul>li").mouseleave(function () {
        $(this).find("i").hide();
        $(this).find("span").show();
    });

    $(".head-nav li a").mouseenter(function () {
        $(this).next().stop().slideDown(500);
        $(this).next().children("dd").mouseenter(function () {
            $(this).css("color", "#EF4423");
        });
        $(this).next().children("dd").mouseleave(function () {
            $(this).css("color", "");
        });
    });
    $(".head-nav li").mouseleave(function () {
        $(this).children("a").next().stop().slideUp(500);
    });


//大的轮播图
    //获取相框的宽度

    var imgWidth = $("#box>.screen").width();
    var ww=$(window).width();
    var lis1 = $("#box>.screen>ul").children("li");
    lis1.width(ww);
    $("#box").width(ww);
    $(".screen").width(ww);

    var timer1 = setInterval(clickHandler, 2000);

    var pic = 0;

    for (var i = 0; i < lis1.length; i++) {
        var olList = $("<li>❤</li>");
        olList.appendTo($("#box>.screen>ol"));
        olList.mouseenter(function () {
            pic = $(this).index();
            $(this).css("color", "red").siblings("li").css("color", "#fff");
            $("#box>.screen>ul").stop().animate({"left": -pic * ww});
        });
    }
    //让ol中ol的第一个li标签默认背景色
    $("#box>.screen>ol").children("li:eq(0)").css("color", "red");
    //复制ul中li的第一个li添加到ul最后
    $("#box>.screen>ul").children("li:eq(0)").clone().appendTo($("#box>.screen>ul"));
    //var timer = setInterval(clickHandler, 3000);
    //给box注册鼠标进入和离开事件
    $("#box").mouseenter(function () {
        $("#arr").show();
        console.log(timer1);
        clearInterval(timer1);
    });
    $("#box").mouseleave(function () {
        $("#arr").hide();
        timer1 = setInterval(clickHandler, 2000);
        console.log(6);
    });
    //给左右按钮注册鼠标点击事件
    $("#right").click(clickHandler);
    $("#left").click(function () {
        if (pic == 0) {
            pic = $("#box>.screen>ul").children("li").length - 1;
            $("#box>.screen>ul").css("left", -pic * ww);
        }
        pic--;
        $("#box>.screen>ul").stop().animate({"left": -pic * ww});
        $("#box>.screen>ol").children("li:eq(" + pic + ")").siblings("li").css("color", "#fff")
        $("#box>.screen>ol").children("li:eq(" + pic + ")").css("color", "red");
    });
    //向右事件
    function clickHandler() {
        if (pic == $("#box>.screen>ul").children("li").length - 1) {
            pic = 0;
            $("#box>.screen>ul").css("left", -pic * ww);
        }
        pic++;
        $("#box>.screen>ul").stop().animate({"left": -pic * ww});
        if (pic == $("#box>.screen>ul").children("li").length - 1) {
            $("#box>.screen>ol").children("li:eq(0)").css("color", "red");
            $("#box>.screen>ol").children("li").last().css("color", "#fff");
        } else {
            $("#box>.screen>ol").children("li:eq(" + pic + ")").siblings("li").css("color", "#fff")
            $("#box>.screen>ol").children("li:eq(" + pic + ")").css("color", "red");
        }
    }


    // 手风琴部分开始

    $(".accordion .accordion-b li").mouseenter(function () {

        $(this).stop().animate({"width":"600px"},500);
        $(this).siblings("li").stop().animate({"width": "100px"},500);
    }).mouseleave(function () {
        $(".accordion .accordion-b li").stop().animate({"width":"100px"});
        $(".accordion .accordion-b li:eq(2)").stop().animate({"width":"600px"});
    });




    // 手风琴部分结束

    // 婚纱礼服部分开始

    $(".dress-l").mouseover(function () {
        $(".dress-l>.span-1").stop().slideUp(500);
        var json = {bottom:"-288px"};
        $(".dress-l>.span-2").stop().animate(json,500,"linear");
    }).mouseout(function () {
        $(".dress-l>.span-1").stop().slideDown(500);

        var json = {bottom:"0"};
        $(".dress-l>.span-2").stop().animate(json,500,"linear");

    });


    $(".dress ul li").mouseover(function () {
        $(this).siblings("li").children("span").hide();
        $(this).children("span").slideDown(500);

    }).mouseout(function () {
        $(".dress ul li").children("span").hide();
    });

    // 婚纱礼服部分结束


    // 旋转木马部分
    var config = [
        {
            width: 400,
            top: 95,
            left: 0,
            opacity: 0.3,
            zIndex: 2
        },//0
        {
            width: 400,
            top: 65,
            left: 100,
            opacity: 0.5,
            zIndex: 3
        },//1
        {
            width: 800,
            top: 35,
            left: 200,
            opacity: 1,
            zIndex: 4
        },//2
        {
            width: 400,
            top: 65,
            left: 700,
            opacity: 0.5,
            zIndex: 3
        },//3
        {
            width: 400,
            top: 95,
            left: 800,
            opacity: 0.3,
            zIndex: 2
        }//4
    ];
    var wrap = document.getElementById("wrap");
    var slide = wrap.children[0];
    var ul = slide.children[0];
    var arrow = slide.children[1];
    var lis = ul.children;
    var arrowL = arrow.children[0];
    var arrowR = arrow.children[1];
    change();
    var flag = true;
    arrowR.onclick = function () {
        if (flag) {
            flag = false;
            var temp = config.shift();
            config.push(temp);
            change();
        }
    };
    arrowL.onclick = function () {
        if (flag) {
            flag = false;
            var temp = config.pop();
            config.unshift(temp);
            change();
        }
    };
    function change() {
        for (var i = 0; i < lis.length; i++) {
            animate(lis[i], config[i], function () {
                flag = true;
            });
        }
        ;
    };


    
    
    
    // 美图展示

    $(".bottom .bb li").mouseover(function () {
        $(this).children("span").hide();
        $(this).siblings("li").children("span").show();

    }).mouseout(function () {
        $(".bottom .bb li").children("span").hide();

    });
    
    
    
    
    //鼠标移动效果  小星星的效果
    var stararr2 = ["url(images/subball1.png)","url(images/subball2.png)","url(images/subball3.png)","url(images/subball4.png)","url(images/subball5.png)","url(images/subball6.png)","url(images/subball7.png)","url(images/subball8.png)"]
    document.onmousemove = function (e) {
        var star = document.createElement("div");
        star.style.height = 30 + "px";
        star.style.width = 30 + "px";
        star.className = "star";
        var num = Math.floor(Math.random() *8);
        star.style.backgroundImage = stararr2[num];
        document.body.appendChild(star);

        star.style.left = getPageX(e) + Math.random() * 80 - 60 + "px";
        star.style.top = getPageY(e) + Math.random() * 20 - 20 + "px";

        $(star).animate({
            "width": 0,
            "height": 0
        }, 500, function () {
            $(star).remove();
        });
    };

    function getPageX(e) {
        var x = e.clientX;
        return scroll().left + x;
    }

    function getPageY(e) {
        var y = e.clientY;
        return scroll().top + y;
    }

    function scroll() {
        return {
            top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
            left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
        };
    }

   //鼠标特效结束



    function animate(tag, obj, fn) {
        clearInterval(tag.timer);
        tag.timer = setInterval(function () {
            var flag = true;
            for (k in obj) {
                if (k == "opacity") {
                    var leader = getStyle(tag, k) * 100;
                    var target = obj[k] * 100;
                    var step = (target - leader) / 10;
                    step = target > leader ? Math.ceil(step) : Math.floor(step);
                    leader += step;
                    tag.style[k] = leader / 100;
                } else if (k == "zIndex") {
                    tag.style.zIndex = obj[k];
                } else {
                    var leader = parseInt(getStyle(tag, k)) || 0;
                    var target = obj[k];
                    var step = (target - leader) / 10;
                    step = target > leader ? Math.ceil(step) : Math.floor(step);
                    leader += step;
                    tag.style[k] = leader + "px";
                }
                if (target != leader) {
                    flag = false;
                }
            }
            if (flag) {
                clearInterval(tag.timer);
                if (typeof fn == "function") {
                    fn();
                }
            }
        }, 17)
    }

    function getStyle(tag, attr) {
        return tag.currentStyle ? tag.currentStyle[attr] : getComputedStyle(tag, null)[attr];
    }

    //回到顶部小飞机
    var toTop = document.getElementById("toTop");
    var toLeft = document.getElementById("toLeft");
    var fly = document.getElementById("fly");
    fly.onmouseover = function () {
        toTop.style.display = "block";
        toLeft.style.display = "none";
    }
    fly.onmouseout = function () {
        toTop.style.display = "none";
        toLeft.style.display = "block";
    }
    var xyq = document.getElementById("xyq");
    window.onscroll = function(){
        xs(fly);
    }
    function xs(ele) {
        if(scroll().top > 200){
            ele.style.display = "block";
        }else{
            ele.style.display = "none";
        }
        leader = scroll().top;
    }
    var timer = null;
    var target = 0;
    var leader = 0;

    toTop.onclick = function () {
        timer = setInterval(function () {
            var step = (target-leader)/10;
            step = step>0?Math.ceil(step):Math.floor(step);
            leader = leader + step;
            window.scrollTo(0,leader);
            console.log(1);
            if(target === leader){
                clearInterval(timer);
            }
        },30);
    }

    function scroll(){
        return {
            top: window.pageYOffset || document.documentElement.scrollTop,
            left: window.pageXOffset || document.documentElement.scrollLeft
        }
    }


    //许愿墙

    var xyq = document.getElementById("xyq");
    window.onscroll = function () {
        if(scroll().top > 200){
            xyq.style.display = "block";
        }else{
            xyq.style.display = "none";
        }
        leader = scroll().top;
    }


});






