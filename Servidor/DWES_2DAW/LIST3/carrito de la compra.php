<?php session_start() ?>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
<body>
<h3><u>Welcome to CestaTrass</u></h3>
<br>
<form action="<?= $_SERVER['PHP_SELF'] ?>" method="post">
    Product's name <input type="text" name="item" size="20"><br>
    Units <input type="text" name="cantidad" size="20"><br>
    <input type="submit" name="submit" value="Añadir a la cesta"><br>

</form>
<?php
if(isset($_SESSION['carrito'])){
    $itemsEnCesta=$_SESSION["carrito"];
} else {
    $itemsEnCesta=[];
}
if(isset($_REQUEST["submit"])){
    $itemsEnCesta=$_SESSION["carrito"];
    $item=$_REQUEST["item"];
    $cantidad=$_REQUEST["cantidad"];
    if(isset($itemsEnCesta[$item]) ){
        $itemsEnCesta[$item] += $cantidad;
    }else{
        $itemsEnCesta[$item] = $cantidad;
    }

}

if (isset($itemsEnCesta)) { ?>
    <form action="<?= $_SERVER['PHP_SELF'] ?>" method="post">
    <?php
    echo "Shopping cart content:<br><br>";
    echo "<TABLE border='1' align='left' bgcolor='lightGray'>";
    echo "<th>Product</th>";
    echo "<th>Units</th>";
    echo"<th>check</th>";
    foreach ($itemsEnCesta as $k => $v) {
        echo "<tr>";
        echo "<td>$k</td>";
        echo "<td>$v</td>";
        echo"<th><input type='checkbox' name='borrar[]' value='$k'></th>";
        echo "</tr>";
    }
    echo "</TABLE> <br><br>";
    echo "<input type='submit' name='delete' value='Borrar producto'><br>";
    echo "</form>";

}else{
        echo "La cesta esta vacia";
    }
if(isset($_REQUEST["borrar"])){
        foreach ($_REQUEST["borrar"] as $item){
            unset($itemsEnCesta[$item]);
        }
}
    $_SESSION["carrito"]=$itemsEnCesta;


?>
</body>
</html>
