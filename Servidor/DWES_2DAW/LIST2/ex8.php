<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ejercicio 8 reproduccion de videos</title>
</head>
<body>
<form action="ex8.php" name="vUrl" method="post">
    <label>Url Youtube: </label><input type="text" name="ytUrl">
    <input type="submit" name="enviar" value="enviar">
</form>
<?php
    if(isset($_REQUEST['enviar'])){
        $urlYT = $_REQUEST['ytUrl'];
        function reemplazar($urlYT)
        {
            $watch="watch?v=";
            $embed="embed/";
            return str_replace($watch,$embed,$urlYT);
        }

        $n_urlYT = reemplazar($urlYT);
        echo "<br>";
        echo '<iframe width="560" height="315" src='.$n_urlYT.' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
    }
?>
</body>
</html>
