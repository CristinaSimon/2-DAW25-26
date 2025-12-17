<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Adivina el numero</title>
</head>
<body>
<?php
$numRand = isset($_REQUEST['numRand']) ? $_REQUEST['numRand'] : rand(1, 100);

if(isset($_REQUEST['enviar'])){
    $numUsu = $_REQUEST['numUsu'];
    echo "$numRand";
    echo "
    <h1>Adivina el numero</h1>
    <p>Adivina el numero comprendido entre 1 y 100</p>
    <form method='POST' action='ex7.php' name='numAleatorio'>
    <input type='hidden' name='numRand' value='".$numRand."'>
            <input type='number' name='numUsu'>
            <input type='submit' name='enviar' value='enviar'>           
    </form>";

    if ($numUsu>$numRand){
        echo "<h3>El numero es más pequeño</h3>";
    }elseif ($numUsu<$numRand){
        echo "<h3>El numero es más grande</h3> <br>";
    }else{
        echo "<h2>Enorabuena! Has acertado</h2>";
    }



}else{
    echo "
    <h1>Adivina el numero</h1>
    <p>Adivina el numero comprendido entre 1 y 100</p>
    <form method='POST' action='ex7.php' name='numAleatorio'>
            <input type='number' name='numUsu'>
            <input type='submit' name='enviar' value='enviar'>           
    </form>";

}
?>
</body>
</html>
