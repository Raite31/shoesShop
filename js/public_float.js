$(function () {
    /*悬浮*/
    $(".float1").hide()
    $("#nav-grid1,#float11").hover(function () {
        $("#float11").show();
        $("#nav-grid1").css("color", "#FF0000")
    }, function () {
        $(".float1").hide();
        $("#nav-grid1").css("color", "#444444");
    })
    $("#nav-grid2,#float12").hover(function () {
        $("#float12").show();
        $("#nav-grid2").css("color", "#FF0000");
    }, function () {
        $(".float1").hide();
        $("#nav-grid2").css("color", "#444444");
    })
    $("#nav-grid3,#float13").hover(function () {
        $("#float13").show();
        $("#nav-grid3").css("color", "#FF0000");
    }, function () {
        $(".float1").hide();
        $("#nav-grid3").css("color", "#444444");
    })
    $(".float1-top-grid a").hover(function () {
        $(this).css("color", "red");
    }, function () {
        $(".float1-top-grid a").css("color", "#666666")
    })
})