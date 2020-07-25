$(function () {
    var list = $(".wrapper ul")
    $.post("./php/manage.php", {type: "orderShow"}, function (data) {
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
                    + data[i].user_tel + "</span><span class='state'><input type='text' list='province' class='state2'>" +
                    "<datalist id='province'>" +
                    "<option value='未发货'></option>" +
                    "<option value='已发货'></option>" +
                    "<option value='未签收'></option>" +
                    "<option value='已签收'></option>" +
                    "</datalist> </span></li>";
                list.append(nodeli);
                $(".wrapper ul li:eq(0)").siblings("li").css({
                    "height": "50px",
                    "position": "relative",
                    "top": "30px",
                    "left": "20px",
                    "margin-bottom": "20px",
                })
                $(".wrapper ul li:eq(0)").siblings("li").children("span").css({
                    /*这样设置的列表样式 是最好的*/
                    "display": "block",
                    "float": "left",
                    // 下面这行代码加上上面的display是控制span换行的
                    "word-wrap": "break-word",
                    "width": "135px",
                    "height": "50px",
                    "text-align": "center",
                    "border-right": "gray 1px solid",
                    "border-bottom": "gray 1px solid"
                });
                $(".wrapper ul li:eq(0)").siblings("li").find(".state2").css({
                    "display": "inlie-block",
                    "width": "80px"
                })

            }
        }
    }, 'json')
})