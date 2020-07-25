//设置地址
$(".certain").click(function () {
    var shop_id = $(".shop-table").find(".shop_id").val();
    var shop_name = $(".shop-table").find(".shop_name").val();
    var shop_allName = $(".shop-table").find(".shop_allName").val();
    var shop_num = $(".shop-table").find(".shop_num").val();
    var shop_pic = $(".shop-table").find(".shop_pic").val();
    var shop_price = $(".shop-table").find(".shop_price").val();
    var shop_page = $(".shop-table").find(".shop_page").val();
    $.post("./php/manage.php", {
        shop_id: shop_id,
        shop_name: shop_name,
        shop_allName: shop_allName,
        shop_num: shop_num,
        shop_pic: shop_pic,
        shop_price: shop_price,
        shop_page: shop_page,
        type: "adds"
    }, function (data) {
        if (data == 'success') {
            alert('设置成功！');
        } else {
            alert(data)
        }
    })
});
