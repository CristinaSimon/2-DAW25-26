<?php session_start()?>
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
$notaPhp = 0;
$notaJS=0;
$notaEng=0;
$asignatura=["PHP","JavaScript","English"];
$nombre="";
$nombreErr=true;
$asignaturaErr=true;
$mensajeError="";
$students=[$nombre=>$asignatura];
?>
<form name="nombreA" method="post" >
    <label>Name of the Student</label><input type="text" name="nombre">
    <label><?=$mensajeError?></label>
    <input type="submit" name="submit" value="submit">

</form>
<?php
if(isset($_REQUEST["submit"])){
    if($_REQUEST["nombre"]!==""){
        $nombre=$_REQUEST["nombre"];
        $nombreErr=false;
    }
    $mensajeError="The name of the student can't be empty";
}
if(isset($students[$nombre])){
    foreach ($students[$nombre] as $alumno){
        echo $alumno;
    }
}else{
    echo "<form name='Asignaturas' method='post'>
        <label>Enter de mark for: ".$nombre." </label> <br>
        <label>Mark Subjets:</label> <br>";
    foreach ($asignatura as $asig){
        echo"<label>".$asig."</label>
            <select name=".$asig.">
               <option value='' selected>Choose the Mark</option>";
        for ($i=1;$i<10;$i++){
            echo "<option value=".$i.">".$i."</option>";
        }
        echo"</select><label>".$mensajeError."</label> <br>";
    }

            echo "<input type='submit' name='submitNotas' value='submit'>    
    </form>";
        }
        if(isset($_REQUEST["submitNotas"]) ){
            if(isset($_REQUEST[$asignatura])){
                if($_REQUEST[$asignatura]!==""){
                    $notaPhp=$_REQUEST[$asignatura[0]];
                    $notaJS=$_REQUEST[$asignatura[1]];
                    $notaEng=$_REQUEST[$asignatura[2]];
                    $asignaturaErr=false;
                }else{
                    $mensajeErrorErr="The mark can't be empty";
            }
            $students+=[$nombre=>$asignatura];
            $_SESSION[$students];
            foreach ($students as $alumno){
                echo $alumno;
            }
        }
    }

?>
</body>
</html>
