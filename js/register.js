$(function () {
    var use = /^[a-zA-Z0-9]{3,15}$/;
    var use2 = /^[a-zA-Z0-9]{4,10}$/;

    $("#register").click(function () {
        if (use.test($("#account").val()) && use2.test($("#password").val())) {
            var account = $("#account").val();
            var password = $("#password").val();
            $.post("./php/download.php", {account: account, password: password, type: "add"}, function (data) {
                if (data == 'exist') {
                    alert('已存在该用户！');
                    window.location.href = "download.html";
                } else {
                    alert('注册成功！');
                    window.location.href = "download.html";
                }
            })
        } else {
            alert("请输入正确密码或账号！")
        }
    })
})