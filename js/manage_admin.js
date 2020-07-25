$(function () {
    var list = $(".wrapper ul")
    $.post("./php/manage.php", {type: "adminShow"}, function (data) {
        // console.log(data);
        if (data == "0") {
        } else {
            for (var i in data) {
                var nodeli = "<li data-id=" + data[i].admin_id + "><span class='id'>"
                    + data[i].admin_id + "</span><span class='name'>"
                    + data[i].admin_name + "</span><span class = 'password'>"
                    + data[i].admin_password + "</span><span><button class='aa' id='change'>修改</button></span>" +
                    "<span><button class='aa' id='del'>删除</button></span></li>";
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
                    "border-right": "1px solid gray",
                    "border-bottom": "1px solid gray"
                })
            }
        }
    }, 'json')

    //修改管理员信息时弹出框
    $(".wrapper ul").on("click", "#change", function () {
        var id = $(this).parents("li").attr("data-id");
        var name = $(this).parent().siblings(".name").html();
        var password = $(this).parent().siblings(".password").html();
        // console.log(name);
        $.cookie("id", id);
        $.cookie("name", name);
        $.cookie("password", password);
        $(".address-table").css("display", "block");
        $("#cover").css("display", "block");
        $("#cover").css("height", document.body.clientHeight + 'px');
        /*把信息预填入表格输入框里*/
        var name = $.cookie("name");
        var password = $.cookie("password");
        $(".address-table .name").val(name);
        $(".address-table .psw").val(password);
    });

    //在弹出框点击取消按钮
    $(".cancle").click(function () {
        $(".address-table").css("display", "none");
        $("#cover").css("display", "none");
    });

    //在弹出框点击确定
    $(".certain").click(function () {
        var id = $.cookie("id");
        var name = $(".address-table").find(".name").val();
        var psw = $(".address-table").find(".psw").val();
        // console.log(name + address+tel);
        $.post("./php/manage.php", {
            id: id,
            name: name,
            psw: psw,
            type: "changeAdmin"
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

    //删除管理员
    $(".wrapper ul").on("click", "#del", function () {
        var id = $(this).parents("li").attr("data-id");
        // alert(id)
        $.post("./php/manage.php", {id: id, type: "del"}, function (data) {
            if (data == 'success') {
                alert('设置成功！');
            } else {
                alert(data)
            }
        })
    });
})