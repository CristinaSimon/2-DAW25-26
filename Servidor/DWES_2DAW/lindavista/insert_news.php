<?php
session_start();
$mensaje = "";
$mostrarResultados = false;
$titulo = $texto = $categoria = $imagen = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $titulo = $_POST['titulo'] ?? '';
    $texto = $_POST['texto'] ?? '';
    $categoria = $_POST['categoria'] ?? '';

    if (isset($_FILES['imagen']) && $_FILES['imagen']['error'] === 0) {
        // Guardar imagen en carpeta "uploads"
        $uploadsDir = 'uploads/';
        if (!is_dir($uploadsDir)) {
            mkdir($uploadsDir, 0777, true);
        }
        $imagen = $uploadsDir . basename($_FILES['imagen']['name']);
        move_uploaded_file($_FILES['imagen']['tmp_name'], $imagen);
    } else {
        $imagen = '';
    }
    insertatBbdd($titulo,$texto,$categoria, $imagen);
    $mostrarResultados = true;
}
?>

    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Subida de noticias</title>
    </head>
    <body>
    <h2>Subida de ficheros</h2>
    <form action="" method="post" enctype="multipart/form-data">
        <label>Título: *</label>
        <input type="text" name="titulo" required value="<?= htmlspecialchars($titulo) ?>"><br><br>

        <label>Texto: *</label>
        <textarea name="texto" required><?= htmlspecialchars($texto) ?></textarea><br><br>

        <label>Categoría:</label>
        <select name="categoria">
            <option value="ofertas" <?= $categoria === 'ofertas' ? 'selected' : '' ?>>ofertas</option>
            <option value="eventos" <?= $categoria === 'eventos' ? 'selected' : '' ?>>eventos</option>
            <option value="general" <?= $categoria === 'general' ? 'selected' : '' ?>>general</option>
        </select><br><br>

        <label>Imagen:</label>
        <input type="file" name="imagen"><br><br>

        <input type="submit" value="Insertar noticia">
    </form>

    <?php if ($mostrarResultados): ?>
        <h3>Resultados del formulario</h3>
        <ul>
            <li>Título: <?= htmlspecialchars($titulo) ?></li>
            <li>Texto: <?= nl2br(htmlspecialchars($texto)) ?></li>
            <li>Categoría: <?= htmlspecialchars($categoria) ?></li>
            <li>Imagen:
                <?php if ($imagen): ?>
                    <a href="<?= $imagen ?>" target="_blank">
                        <img src="<?= $imagen ?>" alt="Imagen" style="height:50px">
                    </a>
                <?php endif; ?>
            </li>
        </ul>
        <a href="">[ Insertar otra noticia ]</a>

    <?php endif;
    echo " <br>[<a href=index.php>index</a>]";
    function insertatBbdd($titulo, $texto, $categoria, $imagen)
    {
        $pdo = new Connection();
        $conn = $pdo->getPdo();

        try {
            $stm = $conn->prepare("
            INSERT INTO noticias (titulo, texto, categoria, fecha, imagen)
            VALUES (:titulo, :texto, :categoria, NOW(), :imagen)
        ");

            $stm->bindParam(':titulo', $titulo);
            $stm->bindParam(':texto', $texto);
            $stm->bindParam(':categoria', $categoria);
            $stm->bindParam(':img', $imagen);

            $stm->execute();

            if ($stm->rowCount() > 0) {
                header("Location: index.php");
                exit();
            }
        } catch (PDOException $exception) {
            echo "Error: " . $exception->getMessage();
        }
    }
    ?>
    </body>
    </html>
