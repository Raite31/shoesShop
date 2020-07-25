$(function () {
    var list = $(".wrapper ul")
    $.post("./php/manage.php", {type: "userShow"}, function (data) {
        // console.log(data)
        if (data == "0") {
        } else {
            for (var i in data) {
                var nodeli = "<li data-id=" + data[i].user_id + "><span class='id'>"
                    + data[i].user_id + "</span><span class='name'>"
                    + data[i].user_name + "</span><span class = 'password'>"
                    + data[i].user_password + "</span><span class = 'address'>"
                    + data[i].user_address + "</span><span class = 'tel'>"
                    + data[i].user_tel + "</span></li>";
                list.append(nodeli);
                $(".wrapper ul li:eq(0)").siblings("li").css({
                    "height": "50px",
                    "position": "relative",
                    "top": "30px",
                    "left": "50px",
                    "margin-bottom": "20px",
                })
                $(".wrapper ul li:eq(0)").siblings("li").children("span").css({
                    /*这样设置的列表样式 是最好的*/
                    "display": "block",
                    "float": "left",
                    // 下面这行代码加上上面的display是控制span换行的
                    "word-wrap": "break-word",
                    "width": "180px",
                    "height": "50px",
                    "text-align": "center",
                    "border-right": "gray 1px solid",
                    "border-bottom": "gray 1px solid"

                })
            }
        }
    }, 'json')
})