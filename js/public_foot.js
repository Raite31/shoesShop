$(function () {
    $("a li").hover(function () {
        $(this).css({
            "color":"black"
        })
    },function () {
        $(this).css({
            "color":"gray"
        })
    })
})