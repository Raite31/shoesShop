$(function () {
    // 本文件中所有注释都是解释接下来的代码

    /*引用菜单栏文件*/
    $("#head").load("public_float.html");

    /*引用底部文件*/
    $("#foot").load("public_foot.html");

    /*右上角显示用户名的*/
    var username = $.cookie("username");
    $("#theName").append("<p>" + username + "</p>");

    /*购物车按钮*/
    $("#gwc").click(function () {
        /*取出登陆时保存在cookie的userid*/
        var userid = $.cookie("userid")
        if (userid == null) {
            alert("请先登录")
            window.location.href = "download.html";
        } else {
            window.location.href = "cart.html";
        }
    })

    /*订单记录按钮*/
    $("#order").click(function () {
        window.location.href = "orderDetail.html";
    })

    /*设置固定导航栏*/
    var head = $("#bigHead");
    // 如果没有框架 那就是你浏览的当前浏览器的窗口
    var win = $(window);
    // $(document)是当前文档，就是你看到的整个网页
    var sc = $(document);
    // .scroll()是对元素滚动的次数进行计数
    win.scroll(function () {
        // .scrollTop()是元素的垂直滚动条位置
        if (sc.scrollTop() >= 1) {
            head.addClass("fixed");
        } else {
            head.removeClass("fixed");
        }
    })

    /*获取传来的参数 识别点的是哪个商品*/
    var id = window.location.href.split("?id")[1];

    /*从数据库把该id的图片拿出来*/
    var list = $(".detailPhoto ul");
    var list1 = $(".produce");
    var list2 = $(".choose_name")
    $.post("./php/shop.php", {id: id, type: "photoList"}, function (data) {
        if (data == "0") {
            alert("查询失败")
        } else {
            for (var i in data) {
                var nodeli = "<li><img src='" + data[i].photo_path + "'></li>"
                list.append(nodeli)
                $(".detailPhoto ul li").css({
                    "width": "48%",
                    "float": "left",
                    "margin": "5px",
                    "border": "1px solid #DDDDDD"
                })
                $(".detailPhoto ul li img").css({
                    "width": "100%"
                })
            }
        }
    }, 'json');
    $.post("./php/shop.php", {id: id, type: "shopMessage"}, function (data) {
        if (data == '0') {
            alert("查询失败2");
        } else {
            for (var i in data) {
                console.log(data)
                var nodeli = "<span>" + data[i].shop_name + "</span>";
                list2.append(nodeli);
                var nodeli1 = "<span>" + data[i].shop_produce + "</span>";
                list1.append(nodeli1);
                $(".choose_name span").css({
                    "font-size": "30px",
                })
            }
        }
    }, 'json')

    /*加入购物车按钮*/
})