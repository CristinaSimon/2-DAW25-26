<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Document</title>
    <style>
        table{
            border: 1px solid black;
            border-collapse: unset;
            border-spacing: 0;

        }
        tr{
            width: 30px;
            height: 30px;
        }
        td{
            width: 30px;
            height: 30px;
            background-color: aqua;
            border: 1px solid red;
        }
    </style>
</head>
<body>

<?php
$cont=0;
echo "<table>";
for ($fila=0; $fila<6; $fila++){
    echo "<tr>";
    for ($columna=0; $columna<5; $columna++){
        echo "<td>".$cont."</td>";
        $cont++;
    }
    echo "</tr>";
}
echo "</table>";

?>
</body>
</html>
