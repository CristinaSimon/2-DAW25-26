<?php
header("content-type:application/json");
require_once "../classes/User.php";

switch($_SERVER['REQUEST_METHOD']){
    case 'GET':
        if(isset($_GET["id"])){
            echo $_GET["id"];
            echo User::getUser(htmlspecialchars($_GET["id"]));
        }
        else{
            echo User::getUsers();
        }
        break;
        case 'POST':
            $user = new User($_REQUEST['name'], $_REQUEST['surname'], $_REQUEST['brithday'], $_REQUEST['country']);
            $user->create();
};
