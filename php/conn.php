<?php
header("Content-type:text/html;charset=utf-8");
function getConn()
{
    $link = mysqli_connect('localhost', 'root', '', 'h5shixun');
    mysqli_query($link, 'set names utf8');
    if (!$link) {
        exit("<li>连接MySQL数据库服务器失败！</li>");
    }
    return $link;   
}
?>