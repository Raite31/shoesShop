$(function () {
    var list = $(".wrapper ul")
    $.post("./php/manage.php", {type: "shopShow"}, function (data) {
        // console.log(data);
        if (data == "0") {
        } else {
            for (var i in data) {
                var nodeli = "<li data-id=" + data[i].shop_id + "><span class='id'>"
                    + data[i].shop_id + "</span><span class='name'>"
                    + data[i].shop_name + "</span><span class = 'allName'>"
                    + data[i].shop_allName + "</span><span class='num'>"
                    + data[i].shop_num + "</span><span class = 'price'>"
                    + data[i].shop_price + "</span><span class = 'pic'>"
                    + data[i].shop_pic + "</span><span class = 'page'>"
                    + data[i].shop_page + "</span><span><button class='aa' id='bb'>修改</button></span>" +
                    "<span><button class='aa' id='cc'>删除</button></span></li>";
                list.append(nodeli);
                $(".wrapper ul li:eq(0)").siblings("li").css({
                    "height": "80px",
                    "position": "relative",
                    "top": "50px",
                    "left": "50px",
                    "margin-bottom": "20px",
                })
                $(".wrapper ul li:eq(0)").siblings("li").children("span").css({
                    /*这样设置的列表样式 是最好的*/
                    "display": "block",
                    "float": "left",
                    // 下面这行代码加上上面的display是控制span换行的
                    "word-wrap": "break-word",
                    "width": "110px",
                    "height": "80px",
                    "text-align": "center",
                    "border-right": "gray 1px solid",
                    "border-bottom": "gray 1px solid"
                });
            }
            ;
        }
        ;
    }, 'json');

    //商品修改框的弹出
    $(".wrapper ul").on("click", "#bb", function () {
        var id = $(this).parents("li").attr("data-id");
        var name = $(this).parent().siblings(".name").html();
        var allName = $(this).parent().siblings(".allName").html();
        var num = $(this).parent().siblings(".num").html();
        var price = $(this).parent().siblings(".price").html();
        var pic = $(this).parent().siblings(".pic").html();
        var page = $(this).parent().siblings(".page").html();
        $.cookie("id", id);
        $.cookie("name", name);
        $.cookie("allName", allName);
        $.cookie("num", num);
        $.cookie("price", price);
        $.cookie("pic", pic);
        $.cookie("page", page);
        /*修改框弹出*/
        $(".address-table").css("display", "block");
        $("#cover").css("display", "block");
        $("#cover").css("height", document.body.clientHeight + 'px');
        /*把信息预填入表格输入框里*/
        var name = $.cookie("name");
        var allName = $.cookie("allName");
        var num = $.cookie("num");
        var price = $.cookie("price");
        var pic = $.cookie("pic");
        var page = $.cookie("page");
        $(".address-table .name").val(name);
        $(".address-table .allName").val(allName);
        $(".address-table .num").val(num);
        $(".address-table .price").val(price);
        $(".address-table .pic").val(pic);
        $(".address-table .page").val(page);
    });

    $(".cancle").click(function () {
        $(".address-table").css("display", "none");
        $("#cover").css("display", "none");
    });

    //修改商品确认键
    $(".certain").click(function () {
        var id = $.cookie("id")
        var name = $(".address-table").find(".name").val();
        var allName = $(".address-table").find(".allName").val();
        var num = $(".address-table").find(".num").val();
        var price = $(".address-table").find(".price").val();
        var pic = $(".address-table").find(".pic").val();
        var page = $(".address-table").find(".page").val();
        // console.log(name + address+tel);
        $.post("./php/manage.php", {
            id: id,
            name: name,
            allName: allName,
            num: num,
            price: price,
            pic: pic,
            page: page,
            type: "changeShop"
        }, function (data) {
            if (data == 'success') {
                alert('设置成功！');
                $(".address-table").css("display", "none");
                $("#cover").css("display", "none");
            } else {
                alert(data)
            }
        })
    });

    //删除商品
    $(".wrapper ul").on("click", "#cc", function () {
        var id = $(this).parents("li").attr("data-id");
        // alert(id)
        $.post("./php/manage.php", {id: id, type: "delS"}, function (data) {
            if (data == 'success') {
                alert('设置成功！');
            } else {
                alert(data)
            }
        })
    });
})