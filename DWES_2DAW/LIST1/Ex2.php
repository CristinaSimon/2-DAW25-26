<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ejercicio 2</title>
</head>
<body>
<?php
if(isset($_REQUEST['a'])) $a = htmlspecialchars($_REQUEST["a"]);


function isEven($n){
    if ($n%2==0){
        return true;
    }else{
        return false;
    }
}
if(isEven($a)==true){
    echo "es par";
}else{
    echo "no es par";
}

?>
</body>
</html>
