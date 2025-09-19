<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ejercicio 1</title>
</head>
<body>
<?php
$a=6;
$b=10;
$suma=$a+$b;
$resta=$b-$a;
$multiplicacion=$a*$b;
$division=$a/$b;

echo "los numeros son:  $a  y  $b  <br>";
echo "La suma es $suma <br>
La resta es ".$resta."<br>
La multiplicacion es ".$multiplicacion."<br>
La division es ".$division."<br>";

if($a>$b){
    echo "El numero mayor es: ".$a."<br>";
}else if($a<$b){
    echo "El numero mayor es: ".$b."<br>";
}else{
    echo "Los numeros son iguales <br>";
}

?>
</body>
</html>

