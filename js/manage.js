$(function () {
    var admin_name = $.cookie("admin_name");
    // console.log("???:",admin_name);
    if (admin_name == null) {
        alert("请先登录！")
        window.location.href = "login.html";
    };
    $(".menu-body").hide();
    var $li = $(".menu-list li");
    for (var i = 0; i < 5; i++) {
        // console.log(i);
        $li.eq(i).click(function () {
            $(this).find("div").slideDown();
            $(this).siblings("li").find("div").hide();
            $(this).children("p").css("background-image", "url(photo/sub.png)");
            $(this).siblings("li").children("p").css("background-image", "url(photo/add.png)");
        });
    }
    $('.menu-body').on("click", "p", function () {
        var sId = $(this).data("id");
        window.location.hash = sId;
        loadInner(sId);
    });

    function loadInner(sId) {
        var sId = window.location.hash;
        var pathn, i;
        switch (sId) {
            case "#admin":
                pathn = "manage_admin.html";
                i = 0;
                break;
            case "#adminAdd":
                pathn = "manage_adminAdd.html";
                i = 1;
                break;
            case "#user":
                pathn = "manage_user.html";
                i = 2;
                break;
            case "#shop":
                pathn = "manage_shop.html";
                i = 3;
                break;
            case "#shopAdd":
                pathn = "manage_shopAdd.html";
                i = 4;
                break;
            case "#order":
                pathn = "manage_order.html";
                i = 5;
                break;
            case "#photo":
                pathn = "manage_photoOperate.html";
                i = 6;
                break;
        }
        $(".rightDiv").load(pathn);

    }

    var sId = window.location.hash;
    loadInner(sId);
});