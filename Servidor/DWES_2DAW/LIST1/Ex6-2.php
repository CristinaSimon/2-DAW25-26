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
echo "<table border='1' width='270px'>";
for ($i=1; $i<=8; $i++){
    echo "<tr width='30px' height='30px'>";
    for ($j=1; $j<=8; $j++){
        //echo"<td width='30px' height='30px'>"." </td>";
        if($i%2==0 && $j%2!==0){
            echo "<td bgcolor='red' width='30px' height='30px'>";
        }else{
            echo "<td bgcolor='green' width='30px' height='30px'>";
        }
    }
    echo "</tr>";

}

?>
</body>
</html>
