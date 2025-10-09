<?php
if(isset($_REQUEST["color"])){
    setcookie("bgcolor", $_REQUEST["color"], time() + 3600);
    header('Location: coockie1.php');//redirige para aplicar el color sin reenviar el formulario

}
$bgcolor = isset($_COOKIE["bgcolor"]) ? $_COOKIE["bgcolor"] : "while" ;

?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style>
        body{
            background-color: <?= htmlspecialchars($bgcolor); ?>;
        }

    </style>
    <title>Document</title>
</head>
<body>
<form action="coockie1.php" method="post">
    <label><input type="radio" name="color" value="red" <?=$bgcolor== "red" ? "checked": ""?>> Red </label> <br>
    <label><input type="radio" name="color" value="green" <?=$bgcolor== "green" ? "checked": ""?>> Green</label> <br>
    <label><input type="radio" name="color" value="blue" <?=$bgcolor== "blue" ? "checked": ""?>> Blue</label> <br>
    <input type="submit" value="cambiar color de fondo">
</form>

</body>
</html>
