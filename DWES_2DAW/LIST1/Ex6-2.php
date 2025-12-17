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
echo "<table border='1' cellspacing='0px' cellpadding='0px' width='270px'>";
for ($fila=1; $fila<=9; $fila++){
    echo "<tr width='30px' height='30px'>";
    for ($columna=1; $columna<=9; $columna++){
        if(($fila%2!==0 &&$columna%2==0)||($fila%2==0 && $columna%2!==0)){
            echo "<td bgcolor='black' width='30px' height='30px'>";
        }else{
            echo "<td bgcolor='white' width='30px' height='30px'>";
        }
    }
    echo "</tr>";

}

?>
</body>
</html>
