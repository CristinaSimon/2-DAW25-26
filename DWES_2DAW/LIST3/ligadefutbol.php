<?php
if(isset($_REQUEST["liga"])){
    setcookie("round", $_REQUEST["liga"], time() + 3600);
    header('Location: ' . htmlspecialchars($_SERVER["PHP_SELF"]));
    exit;
}

$round = isset($_COOKIE["round"]) ? $_COOKIE["round"]+1 : 1;

// Función para normalizar nombres
function normalizar($nombre){
    $nombre = strtolower(trim($nombre));
    $nombre = preg_replace('/\s+/', '_', $nombre);
    return $nombre;
}


if(isset($_REQUEST["localteam"])){
    $localteam = $_REQUEST["localteam"];
    $localgols = $_REQUEST["localgols"];
    $visiingteam = $_REQUEST["visiingteam"];
    $visiinggols = $_REQUEST["visiinggols"];

    for($i=0; $i<count($localteam); $i++){
        $local = trim($localteam[$i]);
        $visitante = trim($visiingteam[$i]);
        $gl = intval($localgols[$i]);
        $gv = intval($visiinggols[$i]);

        $cookie_local = "equipo_" . normalizar($local);
        $cookie_visitante = "equipo_" . normalizar($visitante);

        $p_local = isset($_COOKIE[$cookie_local]) ? intval($_COOKIE[$cookie_local]) : 0;
        $p_visitante = isset($_COOKIE[$cookie_visitante]) ? intval($_COOKIE[$cookie_visitante]) : 0;

        // Sumar puntos según resultado
        if($gl > $gv) $p_local += 3;
        elseif($gl < $gv) $p_visitante += 3;
        else { $p_local += 1; $p_visitante += 1; }

        // Guardar cookies actualizadas
        setcookie($cookie_local, $p_local, time()+3600);
        setcookie($cookie_visitante, $p_visitante, time()+3600);
    }

    // Recargar para evitar reenvío del formulario
    header("Location: " . $_SERVER['PHP_SELF']);
    exit;
}

$tabla = [];
foreach($_COOKIE as $key => $valor){
    if(strpos($key,'equipo_')===0){
        $equipo = substr($key,7); // quitar prefijo
        $equipo_mostrar = str_replace('_',' ', ucfirst($equipo));
        $tabla[$equipo_mostrar] = intval($valor);
    }
}
arsort($tabla); // ordenar desc por puntos
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
    <label>Round <?=$round?> Enter the number of matches</label>
    <input type="text" name="partidos"/>
    <?php
    if(isset($_REQUEST["liga"])){
        $partidos=$_REQUEST["partidos"];
        echo "<label>Local Team</label><label> Goals</label> <label>Visiting Team</label> <label>Goals</label>";
        for ($i=0; $i < $partidos; $i++) {
            echo "<input type='text' name='localteam[$i]' placeholder='Local Team'>";
            echo "<input type='number' name='localgols[$i]' placeholder='Goals' min='0'>";
            echo "<input type='text' name='visiingteam[$i]' placeholder='Visiting Team'>";
            echo "<input type='number' name='visiinggols[$i]' placeholder='Goals' min='0'><br><br>";
        }
        echo "<input type='submit' value='Guardar Resultados'>";
    }
    ?>
</form>

<hr>
<h3>Clasificación</h3>

<?php
// Comprobar si hay equipos en la tabla
if(count($tabla) > 0) {
    // Crear la tabla HTML
    echo "<table border='1'>";
    echo "<tr>";
    echo "<th>Equipo</th>";
    echo "<th>Puntos</th>";
    echo "</tr>";

    // Recorrer cada equipo y sus puntos
    foreach($tabla as $equipo => $puntos) {
        echo "<tr>";
        echo "<td>" . htmlspecialchars($equipo) . "</td>";
        echo "<td>" . $puntos . "</td>";
        echo "</tr>";
    }
    echo "</table>";
} else {
    // Si no hay equipos, mostrar mensaje
    echo "<p>No hay resultados aún.</p>";
}
?>


<br>
<a href="?reset=1">Reiniciar Liga</a>
</body>
</html>
