$(function () {
    //点击登录键时的方法
    $("#download").click(function () {
        var account = $("#account").val();
        var password = $("#password").val();
        $.post("./php/download.php", {account: account, password: password, type: "down"}, function (data) {
            // console.log(data)
            if (data == "fail") {
                alert("登陆失败，请重新输入！");
                $("#account").val("");
                $("#password").val("");
            } else {
                // console.log(data)
                for (var i in data) {
                    // console.log(data[i])
                    $.cookie("userid", data[i].user_id);
                    $.cookie("username", data[i].user_name);
                }
                window.location.href = "index.html";
            }
        }, 'json')
    })
    $("#register").click(function () {
        window.location.href = "register.html"
    })
})

