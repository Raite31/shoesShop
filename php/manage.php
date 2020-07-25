<?php
require "conn.php";     //引用文件
$link = getConn();      //引用上面文件里的方法

switch ($_POST["type"]) {
    case "login":   //来自login.js 判断是否有该用户
        mysqli_query($link, "set names utf8");//设置字符集
        $name = $_POST["name"];
        $pwd = $_POST["pwd"];
        $sql = "select * from admin_table where admin_name = '$name' and admin_password = '$pwd'";
        $result = mysqli_query($link, $sql);
        if ($result->num_rows > 0) {
            $sql = "select admin_name from admin_table where admin_name = '$name'";
            $result = mysqli_query($link, $sql);
            while ($row = $result->fetch_assoc()) {
                $array[] = $row;
            }
            echo json_encode($array);
        } else {
            echo json_encode("fail");
        }
        break;
    case "adminShow":   //来自manage_admin.js 显示管理员信息
        $sql = "select * from admin_table";     //搜索管理员表的所有数据
        $result = mysqli_query($link, $sql);        //mysqli_query：执行针对数据库的查询操作
        while ($row = $result->fetch_assoc()) {     //->表示“的”的意思，这里意思是把$result语句运行后的结果集里的记录一条条提取出来保存在$row里
            $array[] = $row;    //再存放到数组里
        }
        if ($result->num_rows > 0) {        //$result结果的行数>0
            echo json_encode($array);       //把数据进行json编码，传输回去
        } else {
            echo "0";       //查询失败时，返回个0
        }
        break;
    case "userShow":    //来自manage_user.js 显示用户信息
        $sql = "select * from user_table";
        $result = mysqli_query($link, $sql);
        while ($row = $result->fetch_assoc()) {
            $array[] = $row;
        }
        if ($result->num_rows > 0) {
            echo json_encode($array);
        } else {
            echo "0";
        }
        break;
    case "shopShow":    //来自manage_shop.js 显示商品信息
        $sql = "select * from shop_table";
        $result = mysqli_query($link, $sql);
        while ($row = $result->fetch_assoc()) {
            $array[] = $row;
        }
        if ($result->num_rows > 0) {
            echo json_encode($array);
        } else {
            echo "0";
        }
        break;
    case "orderShow":   //来自manage_order.js 显示订单详情信息
        $sql = "select orderdetail_table.ordera_id,
            shop_table.shop_id,shop_table.shop_name,shop_table.shop_price ,
            user_table.user_id,user_table.user_name,user_table.user_address,user_table.user_tel 
            from orderdetail_table left join shop_table on shop_table.shop_id = orderdetail_table.shop_id 
            left join order_table on order_table.order_id = orderdetail_table.order_id 
            left join user_table on user_table.user_id = orderdetail_table.user_id";        //多表查询
        $result = mysqli_query($link, $sql);
        while ($row = $result->fetch_assoc()) {
            $array[] = $row;
        }
        if ($result->num_rows > 0) {
            echo json_encode($array);
        } else {
            echo "0";
        }
        break;
    case "photoShow":   //来自manage_photoOperate.js 显示轮播图信息
        $sql = "select * from photo_table";
        $result = mysqli_query($link, $sql);
        while ($row = $result->fetch_assoc()) {
            $array[] = $row;
        }
        if ($result->num_rows > 0) {
            echo json_encode($array);
        } else {
            echo "0";
        }
        break;
    case "changeAdmin": //来自manage_admin.js 修改管理员信息
        mysqli_query($link, "set names utf8");//设置字符集
        $id = $_POST["id"];
        $name = $_POST["name"];
        $psw = $_POST["psw"];
        $sql = "update admin_table set admin_password = '$psw',admin_name = '$name' where admin_id = '$id'";
        $result = mysqli_query($link, $sql);
        if (mysqli_affected_rows($link) > 0) {
            echo "success";
        } else {
            echo "Error:" . $sql . "<br>" . $link->error;
        }
        break;
    case "del": //来自manage_admin.js 删除管理员信息
        mysqli_query($link, "set names utf8");//设置字符集
        $id = $_POST["id"];
        $sql = "delete from admin_table where admin_id = '$id'";
        $result = mysqli_query($link, $sql);
        if (mysqli_affected_rows($link) > 0) {
            echo "success";
        } else {
            echo "Error:" . $sql . "<br>" . $link->error;
        }
    case "changeShop":  //来自manage_shop.js 修改商品信息
        mysqli_query($link, "set names utf8");//设置字符集
        $id = $_POST["id"];
        $name = $_POST["name"];
        $allName = $_POST["allName"];
        $num = $_POST["num"];
        $price = $_POST["price"];
        $pic = $_POST["pic"];
        $page = $_POST["page"];
        $sql = "update shop_table set shop_name = '$name',shop_allName = '$allName', shop_num = '$num', shop_price = '$price', shop_pic = '$pic',shop_page = '$page' where shop_id = '$id'";
        $result = mysqli_query($link, $sql);
        if (mysqli_affected_rows($link) > 0) {
            echo "success";
        } else {
            echo "Error:" . $sql . "<br>" . $link->error;
        }
        break;
    case "delS":    //来自manage_shop.js  删除商品信息
        mysqli_query($link, "set names utf8");//设置字符集
        $id = $_POST["id"];
        $sql = "delete from shop_table where shop_id = '$id'";
        $result = mysqli_query($link, $sql);
        if (mysqli_affected_rows($link) > 0) {
            echo "success";
        } else {
            echo "Error:" . $sql . "<br>" . $link->error;
        }
        break;
    case "adds":    //来自manage_shopAdd.js 添加商品
        mysqli_query($link, "set names utf8");      //设置字符集
        $shop_id = $_POST["shop_id"];
        $shop_name = $_POST["shop_name"];
        $shop_allName = $_POST["shop_allName"];
        $shop_num = $_POST["shop_num"];
        $shop_pic = $_POST["shop_pic"];
        $shop_price = $_POST["shop_price"];
        $shop_page = $_POST["shop_page"];
        $sql = "insert into shop_table(shop_id,shop_name,shop_allName,shop_num,shop_pic,shop_price,shop_page) values ('$shop_id','$shop_name','$shop_allName','$shop_num','$shop_pic','$shop_price','$shop_page')";
        $result = mysqli_query($link, $sql);
        if (mysqli_affected_rows($link) > 0) {
            echo "success";
        } else {
            echo "Error:" . $sql . "<br>" . $link->error;
        }
        break;
    case "changePhoto": //来自manage_photoOperate.js  修改轮播图信息
        mysqli_query($link, "set names utf8");//设置字符集
        $id = $_POST["id"];
        $url = $_POST["url"];
        $web = $_POST["web"];
        $text = $_POST["text"];
        $sql = "update photo_table set photo_pic = '$url', photo_url = '$web', photo_text = '$text' where photo_id = '$id'";
        $result = mysqli_query($link, $sql);
        if (mysqli_affected_rows($link) > 0) {
            echo "success";
        } else {
            echo "Error:" . $sql . "<br>" . $link->error;
        }
        break;
    case "delP":    //来自manage_photoOperate.js  删除轮播图信息
        mysqli_query($link, "set names utf8");//设置字符集
        $id = $_POST["id"];
        $sql = "delete from photo_table where photo_id = '$id'";
        $result = mysqli_query($link, $sql);
        if (mysqli_affected_rows($link) > 0) {
            echo "success";
        } else {
            echo "Error:" . $sql . "<br>" . $link->error;
        }
        break;
}
$link->close()
?>