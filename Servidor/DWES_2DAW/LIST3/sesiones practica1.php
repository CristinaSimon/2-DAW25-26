<?php session_start() ?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<?php
$usuariosValidos=['pepe'=>123456, 'sonia'=>456789, 'victor'=>123789];
 if (isset($_SESSION["usuario_valido"])){

}else{
     echo"<form action='sesiones.php' method='post' name='usuariosRegistro'>

";
 }
?>
</body>
</html>