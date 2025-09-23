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
if(isset($_REQUEST['n'])) $n = htmlspecialchars($_REQUEST["n"]);
else $n=4;
echo "<table border='1'>";
for($i=1;$i<=10;$i++){
    echo "<tr>". "<td>".$n." x ".$i."</td> <td> = </td>"."<td>".($i*$n)."</td>"."</tr>";
}
echo "</table>";
?>
</body>
</html>
