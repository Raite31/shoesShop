$(function () {
    /*引用菜单栏文件*/
    $("#head").load("public_float.html");

    /*显示用户名*/
    var username = $.cookie("username");
    $("#theName").append("<p>" + username + "</p>");

    /*引用底部文件*/
    $("#foot").load("public_foot.html");

    /*购物车按钮*/
    $("#gwc").click(function () {
        var userid = $.cookie("userid")
        // console.log(userid);
        if (userid == null) {
            alert("请先登录")
            window.location.href = "download.html";
        } else {
            // var userid = $.cookie("userid");
            window.location.href = "cart.html";
        }
    })

    /*订单记录按钮*/
    $("#order").click(function () {
        var userid = $.cookie("userid")
        // console.log(userid);
        window.location.href = "orderDetail.html";
    })

    /*设置固定导航栏*/
    var head = $("#bigHead");
    var win = $(window);
    var sc = $(document);
    win.scroll(function () {
        if (sc.scrollTop() >= 1) {
            head.addClass("fixed");
        } else {
            head.removeClass("fixed");
        }
    })

    /*轮播图展示*/
    var carousellist = $(".dalao #datu");
    $.post("./php/shop.php", {type: "carouselquery"}, function (data) {
        if (data == "0") {
        } else {
            for (var i in data) {
                var nodeli = "<li id=" + data[i].photo_id + "><a href = " + data[i].photo_url + " >" +
                    "<div style = 'background:url(" + data[i].photo_pic + ");'><text>" + data[i].photo_text + "</text></div></a>" +
                    "</li>";
                carousellist.append(nodeli);
                $("#datu li a div").css({
                    "width": "100%",
                    "height": "600px",
                    "background-size": "100% 600px",
                    "position": "absolute",
                })
                /*设置第一张图显示，其他图隐藏*/
                $("#datu li:eq(0)").css({
                    "opacity": "1",
                    "visibility": "visible",
                }).siblings().css({
                    "opacity": "0",
                    "visibility": "hidden"
                });
                $("text").css({
                    "width": "100%",
                    "height": "30px",
                    "position": "absolute",
                    "left": "0",
                    "bottom": "0",
                    "padding-top": "10px",
                    "color": "white",
                    "background-color": "#000000",
                    "opacity": "0.5"
                })
            }
        }
    }, 'json');

    /*写轮播图函数前的准备，设置一个变量time = 0*/
    var time = 0;

    /*编写轮播图定时器，timer为定时器方法名称，timeplay为定时器名称*/
    function timer() {
        timeplay = setInterval(function () {
            time++;
            /*如果time变量是<4期间，对应图片的小圆点添加active Class属性以及显示，其兄弟移除该属性以及隐藏，否则 time=-1，然后重新从0开始加载，3秒轮播一次*/
            if (time < 4) {
                $(".dalao .point li").eq(time).addClass("active").siblings().removeClass("active");
                $(".dalao #datu li").eq(time).css({
                    "opacity": "1",
                    "z-index": "2",
                    "visibility": "visible",
                }).siblings(".dalao #datu li").css({
                    "opacity": "0",
                    "z-index": "1",
                    "visibility": "hidden"
                });
            } else {
                time = -1;
            }
        }, 3000)
    }

    /*调用轮播图函数才能有轮播图效果*/
    timer();

    /*给小点点和图片设置功能，鼠标移入则清除计时器……*/
    $(".dalao #datu").on("mouseover", "li", function () {
        clearInterval(timeplay);
        index = $(this).index();
        $(".dalao #datu li").eq(index).css({
            "opacity": "1",
            "z-index": "2",
            "visibility": "visible"
        }).siblings(".dalao #datu li").css({
            "opacity": "0",
            "z-index": "1",
            "visibility": "hidden"
        });
    }).on("mouseout", "li", function () {
        timer();
    })

    $(".dalao .point li").mouseover(function () {
        clearInterval(timeplay);
        index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".dalao #datu li").eq(index).css({
            "opacity": "1",
            "z-index": "2",
            "visibility": "visible"
        }).siblings(".dalao #datu li").css({
            "opacity": "0",
            "z-index": "1",
            "visibility": "hidden"
        });
    }).mouseout(function () {
        timer();
    });

    /*大图交互*/
    $("#tupian li .hid").hover(function () {
        $(this).css("opacity", "0.5")
    }, function () {
        $("#tupian li .hid").css("opacity", "0")
    })
})