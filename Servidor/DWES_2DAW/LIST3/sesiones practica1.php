<?php session_start() ?>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<?php
/*Realizar un ejercicio de loging con el array asociativo que te redirija al ejercicio de noticias y subida de noticias, con login y cerrar sesion (destroy_sesion) y si se cierra tienes que poder volver a logearte*/
$usuariosValidos=['pepe'=>123456, 'sonia'=>456789, 'victor'=>123789];
 if (isset($_SESSION["usuario_valido"])){

}else{
     echo"<form action='sesiones.php' method='post' name='usuariosRegistro'>

";
 }
?>
</body>
</html>