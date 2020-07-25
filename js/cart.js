$(function () {
    /*引用菜单栏文件*/
    $("#head").load("public_float.html");

    /*引用底部文件*/
    $("#foot").load("public_foot.html");

    //购物车标题栏样式
    $("#cart ul li:eq(0) span").css({
        "display": "inline-block",
        "margin-left": "92px",
        "width": "87px",
    });
    $("#cart ul li:eq(0) .goods").css({
        "margin-left": "165px",
    })

    //获取cookie中登陆时保存的userid来识别购物车要显示谁的商品
    var userid = $.cookie("userid");
    var list = $("#cart ul");
    // alert(userid);
    $.post("./php/cart.php", {userid: userid, type: "query"}, function (data) {
        // console.log(data);
        if (data == "0") {
            // alert("购物车为空")
        } else {
            for (var i in data) {
                var subtotal = data[i].shop_price * data[i].cart_amount;
                var nodeli = "<li data-id=" + data[i].shop_id + "><img src='" + data[i].shop_pic + "'> <span class='name'>"
                    + data[i].shop_name + "</span><br> <span class = 'price'>￥" + data[i].shop_price + "</span><br> <span class='amount'>库存量:<span class='stock'>"
                    + data[i].shop_num + "</span></span><br>&nbsp;&nbsp;&nbsp;购买数量：<input type='text' class='num' size='2' value='"
                    + data[i].cart_amount + "'><br> <span class='subtotal'>总价：￥" + subtotal + "</span><br><button class='delete'>删除</button></li>";
                $(list).append(nodeli)
                $("#cart ul li").css({
                    "width": "200px",
                    "height": "280px",
                    "float": "left",
                    "margin": "10px",
                    "border": "1px solid grey",
                    "text-align": "center",
                    "color": "black",
                    "font-family": "Microsoft JhengHei",
                })
                $("#cart ul li span").css({
                    "margin-top": "10px",
                })
                $("#cart ul li .name").css({
                    "font-size": "15px",
                })
            }
        }
    }, 'json');

    //确认订单按钮的点击事件
    $("#num").click(function () {
        window.location.href = "order.html"
    });

    //改变数量事件的change方法
    $("#cart ul").on("change", ".num", function () {
        var id = $(this).parents("li").attr("data-id");
        var amount = $(this).val();
        // alert(id+","+amount);
        var s = $(this).siblings(".price").text();
        var price = parseFloat(s.substr(1, s.length - 1));	//1的意思是从第二个字符开始
        var totalnode = $(this).siblings(".subtotal");
        $.post("./php/cart.php", {userid: userid, id: id, amount: amount, type: "modify"}, function (data) {
            // alert(data)
            // alert(price)
            if (data == "success") {
                totalnode.text("￥" + price * amount);//小计金额
            }
        })
    });

    //删除的点击事件
    $("#cart ul").on("click", ".delete", function () {
        var id = $(this).parent("li").attr("data-id");
        var totalnode = $(this).parent("li");
        // alert(id)
        $.post("./php/cart.php", {userid: userid, id: id, type: "delete"}, function (data) {
            // alert(data)
            if (data == "success") {
                totalnode.remove();
            }
        })
    });

    //地址设置框的弹出
    $("#address").click(function () {
        $(".address-table").css("display", "block");
        $("#cover").css("display", "block");
        $("#cover").css("height", document.body.clientHeight + 'px');
    });

    $(".cancle").click(function () {
        $(".address-table").css("display", "none");
        $("#cover").css("display", "none");
    });

    //设置地址
    $(".certain").click(function () {
        var username = $(".address-table").find(".name").val();
        var address = $(".address-table").find(".province").val() + $(".address-table").find(".city").val() + $(".address-table").find(".space").val() + $(".address-table").find(".details-address").val();
        var tel = $(".address-table").find(".tel").val()
        // console.log(name + address+tel);
        $.post("./php/cart.php", {
            userid: userid,
            username: username,
            address: address,
            tel: tel,
            type: "addr"
        }, function (data) {
            if (data == 'success') {
                alert('设置成功！');
                $.cookie("address", address);
                $(".address-table").css("display", "none");
                $("#cover").css("display", "none");
            } else {
                alert(data)
            }
        })
    });


})