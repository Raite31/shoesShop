$(function () {
    var list = $(".wrapper ul")
    $.post("./php/manage.php", {type: "photoShow"}, function (data) {
        // console.log(data)
        if (data == "0") {
        } else {
            for (var i in data) {
                var nodeli = "<li data-id=" + data[i].photo_id + "><span class='id'>"
                    + data[i].photo_id + "</span><span class='url'>"
                    + data[i].photo_pic + "</span><span class = 'web'>"
                    + data[i].photo_url + "</span><span class = 'text'>"
                    + data[i].photo_text + "</span><span><button class='aa' id='bb'>" +
                    "修改</button></span>" +
                    "<span><button class='aa' id='cc'>删除</button></span></li>";
                list.append(nodeli);
                $(".wrapper ul li:eq(0)").siblings("li").css({
                    "margin-top": "50px",
                    "height": "50px",
                    "margin-left": "50px",
                });
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
                    "border-bottom": "gray 1px solid",
                    /*该设置可以设置span里的字段自动换行*/
                    "word-break": "break-all",
                    "white-space": "normal",
                });
            }
            ;
        }
        ;
    }, 'json');

    //轮播图修改框的弹出
    $(".wrapper ul").on("click", "#bb", function () {
        var id = $(this).parents("li").attr("data-id");
        var url = $(this).parent().siblings(".url").html();
        var web = $(this).parent().siblings(".web").html();
        var text = $(this).parent().siblings(".text").html();
        // console.log(url);
        $.cookie("id", id);
        $.cookie("url", url);
        $.cookie("web", web);
        $.cookie("text", text);
        $(".address-table").css("display", "block");
        $("#cover").css("display", "block");
        $("#cover").css("height", document.body.clientHeight + 'px');
        /*把信息预填入表格输入框里*/
        var url = $.cookie("url");
        var web = $.cookie("web");
        var text = $.cookie("text");
        $(".address-table .url").val(url);
        $(".address-table .web").val(web);
        $(".address-table .text").val(text);
    });

    $(".cancle").click(function () {
        $(".address-table").css("display", "none");
        $("#cover").css("display", "none");
    });

    //修改商品
    $(".certain").click(function () {
        var id = $.cookie("id");
        var url = $(".address-table").find(".url").val();
        var web = $(".address-table").find(".web").val();
        var text = $(".address-table").find(".text").val();
        $.post("./php/manage.php", {
            id: id,
            url: url,
            web: web,
            text: text,
            type: "changePhoto"
        }, function (data) {
            if (data == 'success') {
                alert('设置成功！');
                $(".address-table").css("display", "none");
                $("#cover").css("display", "none");
            } else {
                alert(data)
            }
            ;
        });
    });

    //删除轮播图
    $(".wrapper ul").on("click", "#cc", function () {
        var id = $(this).parents("li").attr("data-id");
        alert(id)
        $.post("./php/manage.php", {id: id, type: "delP"}, function (data) {
            if (data == 'success') {
                alert('设置成功！');
            } else {
                alert(data)
            }
            ;
        });
    });
});