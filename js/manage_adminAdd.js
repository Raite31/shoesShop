//设置地址
$(".certain").click(function () {
    var admin_id = $(".adminAdd-table").find(".admin_id").val();
    var admin_name = $(".adminAdd-table").find(".admin_name").val();
    var admin_password = $(".adminAdd-table").find(".admin_password").val();

    $.post("./php/manage.php", {
        admin_id: admin_id,
        admin_name: admin_name,
        admin_password: admin_password,
        type: "adda"
    }, function (data) {
        if (data == 'success') {
            alert('设置成功！');
        } else {
            alert(data)
        }
    })
});
