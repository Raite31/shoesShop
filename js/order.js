$(function () {
    var userid = $.cookie("userid");
    var list = $("#order ul");

    /*引用菜单栏文件*/
    $("#head").load("public_float.html");

    /*引用底部文件*/
    $("#foot").load("public_foot.html");

    /*显示订单*/
    $.post("./php/order.php", {userid: userid, type: "order"}, function (data) {
        // console.log(data)
        if (data == "0") {
            // alert("订单为空");
        } else {
            for (var i in data) {
                var nodeli = "<li data-id=" + data[i].user_id + "><span class='pic'><img src='"
                    + data[i].shop_pic + "'></span><span class='name'>"
                    + data[i].shop_name + "</span><span class = 'price'>￥"
                    + data[i].shop_price + "</span><span class='num'>"
                    + data[i].shop_num + "</span><span class='amount'>"
                    + data[i].cart_amount + "</span><span class='rname'>"
                    + data[i].user_name + "</span><span class='address'>"
                    + data[i].user_address + "</span><span class='tel'>"
                    + data[i].user_tel + "</span> </li>";
                list.append(nodeli);
                $("#order ul li:eq(0)").siblings("li").css({
                    "height": "80px",
                    "position": "relative",
                    "top": "50px",
                    "left": "23px",
                    "margin-bottom": "20px",
                })
                $("#order ul li:eq(0)").siblings("li").children("span").css({
                    /*这样设置的列表样式 是最好的*/
                    "display": "block",
                    "float": "left",
                    // 下面这行代码加上上面的display是控制span换行的
                    "word-wrap": "break-word",
                    "width": "155px",
                    "height": "60px",
                    "text-align": "center",
                    "border-right": "gray 1px solid"
                })
                $("#order ul li:eq(0)").siblings("li").find("img").css({
                    "width": "80px",
                    "height": "60px"
                })
            }
        }
    }, 'json')

    //从localStorage数组里取出数据
    var shop = JSON.parse(localStorage.getItem("shop"))
    var shop1 = JSON.parse(localStorage.getItem("shop1"))
    var shop2 = JSON.parse(localStorage.getItem("shop2"))
    var shop3 = JSON.parse(localStorage.getItem("shop3"))
    //点击“确认支付”按钮，则生成订单详情的同时 删除购物车里的数据
    $("#pay").click(function () {
        $.post("./php/order.php", {userid: userid, type: "del"}, function (data) {
            if (data == "success") {
                console.log("购物车数据删除成功");
            } else {
                console.log("购物车数据删除失败")
            }
        }, 'json')

        //生成订单号
        var radom = Math.floor((Math.random() + Math.floor(Math.random() * 9 + 1)) * Math.pow(10, 9));
        //生成订单
        $.post("./php/order.php", {
            userid: userid,
            radom: radom,
            shop: shop,
            shop1: shop1,
            shop2: shop2,
            shop3: shop3,
            type: "setorder"
        }, function (data) {
            if (data == 'success') {
                alert('订单生成失败')
            } else {
                alert("订单生成成功")
                localStorage.removeItem("shop");
                window.location.href = "orderDetail.html";
            }
        })
    })
})