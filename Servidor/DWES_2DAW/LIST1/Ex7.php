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

$temperatures = array(78, 60, 62, 68, 71, 68, 73, 85, 66, 64, 76, 63, 75, 76,
73, 68, 62, 73, 72, 65, 74, 62, 62, 65, 64, 68, 73, 75, 79, 73);
$u_temperature=array_unique($temperatures);
$sum=0;
foreach ($temperatures as $temperature) {
    $sum=$sum+$temperature;
}
$avarage=($sum/count($temperatures));
echo "Average temperature is ". round($avarage,2)."<br>";

sort($u_temperature);
echo "List of five lowest temperatures : ";
for($i=0;$i<5;$i++){

    echo $u_temperature[$i];
    echo ", ";

}
echo "<br>";
//rsort($u_temperature);
$u_tem=count($u_temperature);
$u2_temp= $u_tem-5;
echo "List of five highest temperatures : ";
for($i=$u2_temp;$i<$u_tem;$i++){
       echo $u_temperature[$i].", ";
}

?>
</body>
</html>
