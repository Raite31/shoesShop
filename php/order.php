<?php
require "conn.php";
$link = getConn();

//采用switch的原因：switch比if快
switch ($_POST["type"]) {
    case "setorder":    //order.js过来的，生成订单
        $userid = $_POST["userid"];
        $radom = $_POST["radom"];
        $shop = $_POST["shop"];
        $shop1 = $_POST["shop1"];
        $shop2 = $_POST["shop2"];
        $shop3 = $_POST["shop3"];
        foreach ($shop as $value) {
            $sql = "insert into order_table(ordera_id,user_id) values ('$radom','$userid');
                    insert into orderdetail_table(ordera_id,user_id,shop_id) values ('$radom','$userid','$value');";
            if ($link->multi_query($sql)) {
                do {
                    if ($result = $link->store_result()) {
                        $result->close();
                    }
                } while ($link->next_result());
                echo "Error:  " . $sql . "<br>" . $link->error;
            } else {
                echo "success  ";
            }
        }
        foreach ($shop1 as $value) {
            $sql = "insert into order_table(ordera_id,user_id) values ('$radom','$userid');
                    insert into orderdetail_table(ordera_id,user_id,shop_id) values ('$radom','$userid','$value');";
            if ($link->multi_query($sql)) {
                do {
                    if ($result = $link->store_result()) {
                        $result->close();
                    }
                } while ($link->next_result());
                echo "Error:  " . $sql . "<br>" . $link->error;
            } else {
                echo "success  ";
            }
        }
        foreach ($shop2 as $value) {
            $sql = "insert into order_table(ordera_id,user_id) values ('$radom','$userid');
                    insert into orderdetail_table(ordera_id,user_id,shop_id) values ('$radom','$userid','$value');";
            if ($link->multi_query($sql)) {
                do {
                    if ($result = $link->store_result()) {
                        $result->close();
                    }
                } while ($link->next_result());
                echo "Error:  " . $sql . "<br>" . $link->error;
            } else {
                echo "success  ";
            }
        }
        foreach ($shop3 as $value) {
            $sql = "insert into order_table(ordera_id,user_id) values ('$radom','$userid');
                    insert into orderdetail_table(ordera_id,user_id,shop_id) values ('$radom','$userid','$value');";
            if ($link->multi_query($sql)) {
                do {
                    if ($result = $link->store_result()) {
                        $result->close();
                    }
                } while ($link->next_result());
                echo "Error:  " . $sql . "<br>" . $link->error;
            } else {
                echo "success  ";
            }
        }
        break;
    case "order":   //order.js过来的，显示订单信息
        $userid = $_POST["userid"];
        $sql = "select 
            shop_table.shop_pic,shop_table.shop_name,shop_table.shop_price,shop_table.shop_num,
            cart_table.cart_amount,
            user_table.user_id,user_table.user_name,user_table.user_address,user_table.user_tel 
            from cart_table left join shop_table on shop_table.shop_id = cart_table.shop_id  
            left join user_table on user_table.user_id = cart_table.user_id where cart_table.user_id = '$userid'";//多表查询
        $result = mysqli_query($link, $sql);
        while ($row = $result->fetch_assoc()) {     //把结果集里的记录一条条提取出来
            $array[] = $row;    //存放到数组里
        }
        if ($result->num_rows > 0) {
            echo json_encode($array);   //把数据进行json编码
        } else {
            echo "0";   //查询失败时，返回个0
        }
        break;
    case "del":     //order.js过来的，点击“确认支付时删除购物车数据”
        $userid = $_POST["userid"];
        $sql = "delete from cart_table where user_id='$userid'";
        $result = mysqli_query($link, $sql);
        if ($result->num_rows > 0) {
            echo "success";
        } else {
            echo "Error:" . $sql . "<br>" . $link->error;
        }
        break;
    case "ordera":  //orderDetail.js过来的，显示订单详情信息
        $userid = $_POST["userid"];
        $sql = "select orderdetail_table.ordera_id,
            shop_table.shop_id,shop_table.shop_name,shop_table.shop_price ,
            user_table.user_id,user_table.user_name,user_table.user_address,user_table.user_tel 
            from orderdetail_table left join shop_table on shop_table.shop_id = orderdetail_table.shop_id 
            left join order_table on order_table.order_id = orderdetail_table.order_id 
            left join user_table on user_table.user_id = orderdetail_table.user_id where orderdetail_table.user_id = '$userid'";//多表查询
        $result = mysqli_query($link, $sql);
        while ($row = $result->fetch_assoc()) {     //把结果集里的记录一条条提取出来
            $array[] = $row;    //存放到数组里
        }
        if ($result->num_rows > 0) {
            echo json_encode($array);   //把数据进行json编码
        } else {
            echo "0";       //查询失败时，返回个0
        }
        break;
}
//关闭连接
$link->close();
?>