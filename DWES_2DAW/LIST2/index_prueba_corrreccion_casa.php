<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">
    <title>Cristina Simón - Prueba formularios</title>
    <style>
        .error {color: red;}
    </style>
</head>
<body>

<?php
$nombreErr = $edadErr = $grupoErr = $materiasErr = "";
$nombre = $edad = $grupo = "";
$materias = [];
$formValido = false;

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Validar nombre
    if (empty($_POST["name"])) {
        $nombreErr = "El nombre no puede estar vacío";
    } else {
        $nombre = htmlspecialchars($_POST["name"]);
    }

    // Validar edad
    if (empty($_POST["edad"])) {
        $edadErr = "Debe seleccionar una edad";
    } else {
        $edad = $_POST["edad"];
    }

    // Validar grupo
    if (empty($_POST["grupo"])) {
        $grupoErr = "Debe seleccionar un grupo";
    } else {
        $grupo = $_POST["grupo"];
    }

    // Validar materias
    if (empty($_POST["materias"])) {
        $materiasErr = "Debe seleccionar al menos una materia";
    } else {
        $materias = $_POST["materias"];
    }

    // Si no hay errores, marcar como válido
    if ($nombreErr == "" && $edadErr == "" && $grupoErr == "" && $materiasErr == "") {
        $formValido = true;
    }
}
?>

<?php if (!$formValido): ?>
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post" name="formulario">
        <label>Nombre:</label>
        <input type="text" name="name" value="<?php echo $nombre; ?>">
        <span class="error">* <?php echo $nombreErr; ?></span><br><br>

        <label>Edad:</label>
        <select name="edad">
            <option value="">Seleccione edad</option>
            <?php for ($i = 12; $i <= 18; $i++): ?>
                <option value="<?php echo $i; ?>" <?php if ($edad == $i) echo "selected"; ?>>
                    <?php echo $i; ?>
                </option>
            <?php endfor; ?>
        </select>
        <span class="error">* <?php echo $edadErr; ?></span><br><br>

        <label>Grupo:</label><br>
        <input type="radio" name="grupo" value="3º ESO A" <?php if ($grupo == "3º ESO A") echo "checked"; ?>> 3º ESO A<br>
        <input type="radio" name="grupo" value="3º ESO B" <?php if ($grupo == "3º ESO B") echo "checked"; ?>> 3º ESO B<br>
        <input type="radio" name="grupo" value="3º ESO C" <?php if ($grupo == "3º ESO C") echo "checked"; ?>> 3º ESO C<br>
        <span class="error">* <?php echo $grupoErr; ?></span><br><br>

        <label>Mis asignaturas favoritas:</label><br>
        <?php
        $opciones = ["Math", "English", "History", "Biology", "Spanish"];
        foreach ($opciones as $opt) {
            $checked = (in_array($opt, $materias)) ? "checked" : "";
            echo "<input type='checkbox' name='materias[]' value='$opt' $checked> $opt ";
        }
        ?>
        <span class="error">* <?php echo $materiasErr; ?></span><br><br>

        <input type="submit" name="enviar" value="Enviar">
    </form>

<?php else: ?>
    <h2>Resultado del formulario</h2>
    <p><strong>Nombre:</strong> <?php echo $nombre; ?></p>
    <p><strong>Edad:</strong> <?php echo $edad; ?></p>
    <p><strong>Grupo:</strong> <?php echo $grupo; ?></p>
    <p><strong>Materias favoritas:</strong></p>
    <ul>
        <?php foreach ($materias as $m): ?>
            <li><?php echo $m; ?></li>
        <?php endforeach; ?>
    </ul>
    <a href="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">[ Insertar otro alumno ]</a>
<?php endif; ?>

</body>
</html>
