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
    $.ajax({
        method: "POST",
        url: "http://localhost/php/shop.php",
        data: {id: id, type: "photoList"}, 
        async: true,
        dataType: "JSON",
        success: function (data) {
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
        }
    });
    $.ajax({
        method: "POST",
        url: "http://localhost/php/shop.php", // todo::这里写不太对
        data: {id: id, type: "shopMessage"},
        async: true,
        dataType: "JSON",
        success: function (data) {
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
    }
    })

    /*码数的交互设计*/
    $(".choose_size ul:eq(0)").siblings("ul").children("li").hover(function () {
        $(this).css({
            "border": "1px solid black",
        })
    }, function () {
        $(this).css({
            "border": "",
        })
    })

    /*码数的选择设计*/
    $(".choose_size ul:eq(0)").siblings("ul").children("li").click(function () {
        $(this).addClass("choose_certain");
        $(this).siblings().removeClass("choose_certain");
        $(this).parent("ul").siblings().children().removeClass("choose_certain");
        var size = $(this).text();
    })

    /*添加购物车*/
    var userid = $.cookie("userid");
    var shop = [];
    $(".cart button").click(function () {
        /*这里的id是商品的id，在上面有定义*/
        shop.push(id);
        localStorage.setItem("shop", JSON.stringify(shop));
        if (userid == null) {
            alert("请先登录/注册！");
        } else {
            $.post("./php/cart.php", {userid: userid, id: id, amount: 1, type: "insert"}, function (data) {
                if (data == 'exist') {
                    alert('该商品已存在购物车中，无需重复添加！')
                } else {
                    alert('该商品成功添加购物车！')
                }
            })
        }
    })
})
