
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
if(isset($_REQUEST['listaUsruario'])){
    foreach ($_COOKIE as $use) {

    }
}elseif(isset($_REQUEST['submit'])){
    $usuario = $_REQUEST['usuario'];
    if (!isset($_REQUEST['usuario'])){
        setcookie($usuario,1);
        print "Es la primera vez que el usuario $usuario a visitado el sitio web";
    }else{
        setcookie($usuario,$_COOKIE[$usuario]+1);
        print "el usuario $usuario a visitado el sitio web".($_COOKIE[$usuario]+1);
    }
}else{
    if(isset($_REQUEST['reset'])){
        $usuario = $_REQUEST['usuario'];
        setcookie($usuario,0, time() - 1);
    }
}

?>
    <form action="coockie2.php">
        <label>User</label><input type="text" name="usuario"> <br>
        <input type="submit" name="enviar" value="submit">
        <input type="submit" name="resetear" value="reset">
        <a href="coockie2.php?listausuario=true">Invento Rubén</a>
    </form>
</body>
</html>

