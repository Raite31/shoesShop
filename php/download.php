<?php
require "conn.php"; //包含并运行该文件
$link = getConn(); //调用conn.php里的这个函数
if ($_POST["type"] == "down") { //登录
    $account = $_POST["account"];
    $password = $_POST["password"];
    $sql = "select * from user_table  where user_name = '$account' and user_password = '$password'";
    $result = mysqli_query($link, $sql);
    if ($result->num_rows > 0) {
        $sql = "select user_id,user_name from user_table where user_name = '$account' and  user_password = '$password'";
        $result = mysqli_query($link, $sql);
        while ($row = $result->fetch_assoc()) {
            $array[] = $row;
        }
        echo json_encode($array);
    } else {
//        echo "fail";
        echo json_encode("fail");
    }
} else if ($_POST["type"] == "add") {      //注册
    mysqli_query($link, "set names utf8");//设置字符集
    $account = $_POST["account"];
    $password = $_POST["password"];
    $sql = "select * from user_table where user_name = '$account' and user_password = '$password'";
    $result = mysqli_query($link, $sql);
    if ($result->num_rows > 0) {
        echo "exist";
    } else {
        $sql = "insert into user_table(user_name,user_password) values ('$account','$password')";
        if ($link->query($sql) === true) {  //执行sql语句
            echo "注册成功";
        } else {
            echo "Error:" . $sql . "<br>" . $link->error;
        }
    }
}
$link->close();
?>