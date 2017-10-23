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




