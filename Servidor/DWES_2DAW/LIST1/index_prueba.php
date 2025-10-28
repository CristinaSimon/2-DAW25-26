<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Cristina Simón Prueba formularios</title>
</head>
<body>
<?php
$nombreErr ="";$nombre=""; $grupoErr="";$grupo="";$edad="";$edadErr="";$materias=""; $materiasErr="";
$formValido=false;
if($nombreErr="" && $grupoErr==""&&$edadErr==""&&$materiasErr==""){
    return $formValido=true;
}
if(!isset($_REQUEST["enviar"])|| $formValido=false){
?>
<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" name="formulario" method="post">
    <label> Name</label> <input type="text" name="name" placeholder="Name" value="<?php echo $nombre;?>"><span class="error">* <?php echo $nombreErr;?></span><br>
    <label>Age</label> <select name="edad">
        <?php
        for ($i=12; $i < 19; $i++) {
            echo "<option value='".$i."'>".$i."</option>";
        }
        ?>
    </select><br>
    <label>Group</label> <br> <span class="error">* <?php echo $grupoErr;?></span>
    <input type="radio" name="grupo" value="<?php echo $edad;?>"><label>3º ESO A</label> <br>
    <input type="radio" name="grupo" value="<?php echo $edad;?>"><label>3º ESO B</label> <br>
    <input type="radio" name="grupo" value="<?php echo $edad;?>"><label>3º ESO C</label> <br>
    <label> My Favorite subjet</label>
    <input type="checkbox" name="materias[]" value="<?php echo $materias;?>" > <label>Math</label>
    <input type="checkbox" name="materias[]" value="<?php echo $materias;?>" > <label>English</label>
    <input type="checkbox" name="materias[]" value="<?php echo $materias;?>" > <label>History</label>
    <input type="checkbox" name="materias[]" value="<?php echo $materias;?>" > <label>Biology</label>
    <input type="checkbox" name="materias[]" value="<?php echo $materias;?>" > <label>Spanish</label>
    <input type="submit" name="enviar" value="Sing in">

</form>
<?php
}else{
    if(isset($_REQUEST["nombre"]) && $_REQUEST["nombre"]!=""){
        $nombre=$_REQUEST["nombre"];
    }else{
        $nombreErr="El nombre no puede estar vacio";
    }
    if(isset($_REQUEST["edad"]) && $_REQUEST["eddad"]!=""){
        $edad=$_REQUEST["edad"];
    }else{
        $edadErr="La edad no puede estar vaci";
    }
    if(isset($_REQUEST["grupo"]) && $_REQUEST["grupo"]!=""){
        $grupo=$_REQUEST["grupo"];
    }else{
        $grupoErr="El grupo no puede estar vacio";
    }

    echo $nombre;
    echo $edad;
    echo $grupo;
    foreach ($_REQUEST["materias"] as $key) {
        echo $key."<br>";
    }

}


?>
</body>
</html>
