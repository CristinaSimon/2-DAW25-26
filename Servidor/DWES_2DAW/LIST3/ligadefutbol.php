<?php
/*
Escriba los scripts PHP necesarios para introducir los partidos de fútbol por teclado y mostrar la clasificación tras evaluar cada partido. Primero, el usuario solicita el número de partidos de una temporada. Empezaremos por la primera jornada (1) y así sucesivamente
Una vez introducidos los partidos, el programa evaluará los resultados según la siguiente regla:
• Sumar 3 puntos al equipo ganador.
• Sumar 0 puntos al equipo perdedor.
• Si los equipos empatan, 1 punto para cada equipo.

Finalmente, la aplicación mostrará la clasificación ordenada por puntos del equipo.
*/
if(isset($_REQUEST["liga"])){
    setcookie("round", $_REQUEST["liga"], time() + 3600);
    header('Location: htmlspecialchars($_SERVER["PHP_SELF"])');//redirige para aplicar el color sin reenviar el formulario
}
$round=isset($_COOKIE["round"]) ? $_COOKIE["round"]+1 : 1;
?>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Liga de futbol</title>
</head>
<body>
<form name="liga" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
    <label>Round <?=$round?> Enter the number of matches</label><input type="text" name="partidos"/>
    <?php
    if(isset($_REQUEST["liga"])){
        $partidos=$_REQUEST["partidos"];
        echo "<label>Local Team</label><label> Goals</label> <label> Visiing team</label> <label>Goal</label>";
        for ($i=1; $i <= $partidos; $i++) {
            echo "<input type='text' name='localteam[i]'>";
            echo "<input type='text' name='localgols[i]'>";
            echo "<input type='text' name='visiingteam[i]'>";
            echo "<input type='text' name='visiinggols[i]'>";
        }
        if(isset($_REQUEST["localteam"])){
            $localteam=$_REQUEST["localteam"];
            $localgols=$_REQUEST["localgols"];
            $visiingteam=$_REQUEST["visiingteam"];
            $visiinggols=$_REQUEST["visiinggols"];

        }


    }


    ?>
    <label>Local Team</label><label> Goals</label> <label> Visiing team</label> <label>Goal</label>
</form>
<?php


?>
</body>
</html>
