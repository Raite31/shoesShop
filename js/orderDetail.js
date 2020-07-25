$(function () {
    var userid = $.cookie("userid");
    var list = $(".wrapper ul")
    $.post("./php/order.php", {userid: userid, type: "ordera"}, function (data) {
        // console.log(data)
        if (data == "0") {
        } else {
            for (var i in data) {
                var nodeli = "<li data-id=" + data[i].user_id + "><span class='orderId'>"
                    + data[i].ordera_id + "</span><span class='uname'>"
                    + data[i].user_name + "</span><span class = 'id'>"
                    + data[i].shop_id + "</span><span class='sname'>"
                    + data[i].shop_name + "</span><span class='price'>￥"
                    + data[i].shop_price + "</span><span class='address'>"
                    + data[i].user_address + "</span><span class='tel'>"
                    + data[i].user_tel + "</span></li>";
                list.append(nodeli);
                $(".wrapper ul li:eq(0)").siblings("li").css({
                    "height": "80px",
                    "width":"80%",
                    "position": "relative",
                    "top": "50px",
                    "left": "20px",
                    "margin-bottom": "20px",
                })
                $(".wrapper ul li:eq(0)").siblings("li").children("span").css({
                    /*这样设置的列表样式 是最好的*/
                    "display": "block",
                    "float": "left",
                    // 下面这行代码加上上面的display是控制span换行的
                    "word-wrap": "break-word",
                    "width": "155px",
                    "height": "80px",
                    "text-align": "center",
                    "border-right": "gray 1px solid",

                })
            }
        }
    }, 'json')
})