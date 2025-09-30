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
if(!isset($_REQUEST['enviar'])){
?>
<form action="ex4.php" method="post" name="form">
    <label>Name: </label><input type="text" name="name" ><br>
    <label>Birthday: </label> <input type="date" name="birthday"><br>
    <label>Favorite Operating System </label><select name="system">
        <option value="Linux">Linux</option>
        <option value="Window">Window</option>
        <option value="Appel">Appel</option>
    </select><br>
    <label>Do you like football?</label>
    <input type="checkbox" name="futbol" value="futbol"><br>
    <label>Gender</label><br>
    <label>Man</label><input type="radio" name="sex" value="Man">
    <label>Woman</label><input type="radio" name="sex" value="Woman" checked>
    <br><label>Hobbies</label><br>
    <textarea COLS=“50" ROWS=“4" NAME="hobbies"></textarea><br>
    <input type="submit" name="enviar" value="Enviar">
    <input type="reset" name="cancelar" value="Cancelar">

</form>
<?php
} else{
    $name = $_REQUEST['name'];
    $birthday = $_REQUEST['birthday'];
    $system = $_REQUEST['system'];
    $sex = $_REQUEST['sex'];
    $hobbies = $_REQUEST['hobbies'];
    $today = date("Y-m-d");
    $u_date = strtotime($birthday);
    $age = date_diff(date_create($birthday), date_create($today))->y;


    echo "Hello " . $name . "<br> 
    You are ". $sex . "<br> 
    You are ".$age . " years old <br>
    Your favorite Operating System is ". $system . "<br>";
    if (isset($_REQUEST['futbol'])){
        echo "You like Football <br> ";
    }else{
        echo "You don't like Footbal <br>";
    }
    echo "Your hobbies is ". $hobbies . "<br>";

    echo "<button type='button' datasrc='ex4.php'> formulario </button>";

}
?>
</body>
</html>
