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
echo "<table border='1'>";
for ($i=1; $i<=10; $i++){
    echo "<tr>";
    for ($j=1; $j<=10; $j++){
        echo "<td>".$i." x ".$j." = ".($i*$j)."</td>";
    }
    echo "</tr>";
}
echo "</table>";
?>
</body>
</html>
