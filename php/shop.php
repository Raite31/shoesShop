<?php
require "conn.php";      //引入conn.php连接数据库文件
$link = getConn();       //引用上面文件里的函数

//采用switch的原因：switch比if快
switch ($_POST["type"]) {
    case "query":   //otherPage.js过来的，商品展示
        $sql = "select * from shop_table where shop_page = 1";      //搜索数据库商品表的所有商品
        $result = mysqli_query($link, $sql);        //mysqli_query：执行针对数据库的查询操作
        while ($row = $result->fetch_assoc()) {     // ->表示“的”的意思，这里意思是把$result语句运行后的结果集里的记录一条条提取出来保存在$row里
            $array[] = $row;        //再存放到数组里
        }
        if ($result->num_rows > 0) {        //$result结果的行数>0
            echo json_encode($array);       //把数据进行json编码，传送回去
        } else {
            echo "0";       //查询失败时，返回个0
        }
        break;
    case "query1":   //otherPage.js过来的，商品展示
        $sql = "select * from shop_table where shop_page = 2";      //搜索数据库商品表的所有商品
        $result = mysqli_query($link, $sql);        //mysqli_query：执行针对数据库的查询操作
        while ($row = $result->fetch_assoc()) {     // ->表示“的”的意思，这里意思是把$result语句运行后的结果集里的记录一条条提取出来保存在$row里
            $array[] = $row;        //再存放到数组里
        }
        if ($result->num_rows > 0) {        //$result结果的行数>0
            echo json_encode($array);       //把数据进行json编码，传送回去
        } else {
            echo "0";       //查询失败时，返回个0
        }
        break;
    case "query2":   //otherPage.js过来的，商品展示
        $sql = "select * from shop_table where shop_page = 3";      //搜索数据库商品表的所有商品
        $result = mysqli_query($link, $sql);        //mysqli_query：执行针对数据库的查询操作
        while ($row = $result->fetch_assoc()) {     // ->表示“的”的意思，这里意思是把$result语句运行后的结果集里的记录一条条提取出来保存在$row里
            $array[] = $row;        //再存放到数组里
        }
        if ($result->num_rows > 0) {        //$result结果的行数>0
            echo json_encode($array);       //把数据进行json编码，传送回去
        } else {
            echo "0";       //查询失败时，返回个0
        }
        break;
    case "query3":   //otherPage.js过来的，商品展示
        $sql = "select * from shop_table where shop_page = 4";      //搜索数据库商品表的所有商品
        $result = mysqli_query($link, $sql);        //mysqli_query：执行针对数据库的查询操作
        while ($row = $result->fetch_assoc()) {     // ->表示“的”的意思，这里意思是把$result语句运行后的结果集里的记录一条条提取出来保存在$row里
            $array[] = $row;        //再存放到数组里
        }
        if ($result->num_rows > 0) {        //$result结果的行数>0
            echo json_encode($array);       //把数据进行json编码，传送回去
        } else {
            echo "0";       //查询失败时，返回个0
        }
        break;
    case "search":  //otherPage.js过来的，商品搜索
        $name = $_POST["name"];     //获取js页面传来的name
        $sql = "select * from shop_table  where shop_table.shop_allName like '%$name%'";//多表查询
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
    case "carouselquery":   //index.js过来的，轮播图设置
        $sql = "select * from photo_table";
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
    case "photoList":   //shopDetailPage.js过来的，显示详情图片
        $id = $_POST["id"];
        $sql = "select * from detailphoto_table where shop_id = '$id'";
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
    case "shopMessage":
        $id = $_POST["id"];
        $sql = "select shop_name,shop_produce from shop_table where shop_id = '$id'";
        $result = mysqli_query($link, $sql);
        while ($row = $result->fetch_assoc()) {
            $array[] = $row;
        }
        if ($result->num_rows > 0) {
            echo json_encode($array);
        } else {
            echo "0";
        }
}
$link->close()
?>