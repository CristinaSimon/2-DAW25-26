<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>En un unico fichero</title>
</head>
<body>
<?php
if(!isset($_REQUEST['enviar'])){
    echo "<h1> Tabla de multiplicar</h1>
    <form action='tabla_uni.php' method='get' name='tablaMultiplicar'>
        <label>Numero de la Tabla</label> <input type='number' name='numTab'>
        <input type='submit' name='enviar' value='enviar'>
    </form>";
}else{
$numMul=$_REQUEST['numTab'];
    echo "<table border='1' cellspacing='0px' cellpadding='0px' >";
    echo "<form method='POST' action='tabla_uni.php' name='tabla2'>";
    for ($fila=1; $fila<=10; $fila++){
        echo "<tr> <td>".$numMul." x ".$fila."</td><td> = </td> <td> <input type='number' name='result[]'></td></tr>";
    }
    echo "</table>";
    echo "<input type='hidden' name='numTab' value='".$numMul."'>";
    echo "<input type='submit' name='enviar2' value='enviar'>";
}

if (isset($_REQUEST['enviar2'])) {
    $numMul=$_REQUEST['numTab'];
    $resultado=$_REQUEST['result'];
    $error=0;
    $correciones="";
    for ($i = 1; $i <= 10; $i++) {
        $i * $numMul;
        if (($i * $numMul) != $resultado[$i - 1]) {
            $error++;
            $correciones .= "El resultado de la multiplicacion es: " . $i * $numMul . " no " . $resultado[$i - 1] . "<br>";
        }
    }
}
echo $correciones;
echo "Tus errores son: ".$error."<br>";

?>
</body>
</html>
