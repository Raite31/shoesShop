<?php
require "conn.php";
$link = getConn();

switch ($_POST["type"]){
    case "insert":  //otherPage.js过来的，加入购物车
        //则获取该type传来的username、id、amount
        $userid = $_POST["userid"];
        $id = $_POST["id"];
        $amount = $_POST["amount"];
        $sql = "select * from cart_table where user_id = '$userid' and shop_id = '$id';";
        $result = mysqli_query($link, $sql);
        if ($result->num_rows > 0) {
            echo "exist";
        } else {
            $sql = "insert into cart_table(user_id,shop_id,cart_amount) values ('$userid','$id','$amount');";
            if ($link->multi_query($sql)) {
                echo "success";
            } else {
                echo "Error:" . $sql . "<br>" . $link->error;
            }
        }
        break;
    case "query":   //cart.js过来的，显示购物车信息
        $userid = $_POST["userid"];
        $sql = "select cart_table.cart_amount,cart_table.shop_id,shop_table.shop_name,shop_table.shop_price,shop_table.shop_pic,shop_table.shop_num
    from cart_table left  join shop_table on cart_table.shop_id = shop_table.shop_id where cart_table.user_id='$userid'";//多表查询
        $result = mysqli_query($link, $sql);
        while ($row = $result->fetch_assoc()) {//把结果集里的记录一条条提取出来
            $array[] = $row;    //存放到数组里
        }
        if ($result->num_rows > 0) {
            echo json_encode($array);   //把数据进行json编码
        } else {
            echo "0"; //查询失败时，返回个0
        }
        break;
    case "check":   //cart.js过来的，检查有无地址
        $userid = $_POST["userid"];
        $sql = "select user_table.user_address from user_table where user_table.user_id='$userid'";
        $result = mysqli_query($link, $sql);
        if ($result->num_rows > 0) {
            echo "exist";
        } else {
            echo "0";
        }
        break;
    case "modify":  //cart.js过来的，更新购买数量
        $userid = $_POST["userid"];
        $id = $_POST["id"];
        $amount = $_POST["amount"];
        $sql = "update cart_table set cart_amount=$amount where user_id = '$userid' and shop_id='$id';
            update orderdetail_table set cart_amount=$amount where user_id = '$userid' and shop_id='$id'";
        $result = mysqli_query($link, $sql);
        if ($link->multi_query($sql)) {// 用mysqli_affected_rows即影响的行数作判断标准
            echo "success";
        } else {
            "Error:" . $sql . "<br>" . $link->error;
        }
        break;
    case "delete":  //cart.js过来的，删除购物车商品
        $userid = $_POST["userid"];
        $id = $_POST["id"];
        $sql = "delete from cart_table where shop_id='$id' and user_id = '$userid';
            delete from orderdetail_table where shop_id='$id' and user_id = '$userid'";
        $result = mysqli_query($link, $sql);
        if ($link->multi_query($sql)) {
            echo "success";
        } else {
            "Error:" . $sql . "<br>" . $link->error;
        }
        break;
    case "addr":    //cart.js过来的，设置地址
        mysqli_query($link, "set names utf8");//设置字符集
        $userid = $_POST["userid"];
        $address = $_POST["address"];
        $tel = $_POST["tel"];
        $sql = "update user_table set user_address = '$address',user_tel = $tel  where user_id = '$userid'";
        $result = mysqli_query($link, $sql);
        if (mysqli_affected_rows($link) > 0) {
            echo "success";
        } else {
            echo "Error:" . $sql . "<br>" . $link->error;
        }
}
//关闭连接
$link->close();
?>