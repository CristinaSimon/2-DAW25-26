<?php
include 'conexion.php';
session_start();
$error="";
?>
    <!doctype html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <!-- Bootstrap Core -->
        <link href="./bootstrap/css/bootstrap.min.css" rel="stylesheet">

        <title>Cristina</title>
    </head>
    <body>
        <div class="container bg-info">
            <form class="form-group" name="login" method="post">
                <h2 class="h2"> Welcome Trassierra campsite</h2>
                <input type="text" class="form-control" name="username" placeholder="username"/>
                <input type="password" class="form-control" name="password" placeholder="password"/>
                <input type="submit" class="btn-group" name="Login" value="login"/>
                <label class="warning danger" id="error"><?=$error?></label>
            </form>
        </div>
    </body>
    <link href="bootstrap/js/bootstrap.min.js">
    </html>
<?php
if(isset($_POST['Login'])){
    $username = $_POST['username'];
    $password = $_POST['password'];
    $_SESSION['username'] = $username;
    if($username=="" || $password==""){
        $error="Wrong credentials";
    }else{
        header('location: pichesToday.php');
    }
}