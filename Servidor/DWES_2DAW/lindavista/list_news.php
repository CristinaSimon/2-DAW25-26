<?php
require_once "conexion.php";
session_start();

function listarNoticias($pag = 1)
{
    $rows = 6; // noticias por página
    $offset = ($pag - 1) * $rows;

    $pdo = new Connection();
    $conn = $pdo->getPdo();

    try {
        $stm = $conn->prepare("
            SELECT id, titulo, texto, categoria, fecha, imagen
            FROM noticias
            LIMIT :offset, :rows
        ");

        $stm->bindValue(':offset', $offset, PDO::PARAM_INT);
        $stm->bindValue(':rows', $rows, PDO::PARAM_INT);

        $stm->execute();

        return $stm->fetchAll(PDO::FETCH_ASSOC);

    } catch (PDOException $exception) {
        echo "Error: " . $exception->getMessage();
        return [];
    }
}echo "Estas en listar noticias <br>";

$noticias = listarNoticias();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Listado de Noticias</title>
</head>
<body>

<h2>Noticias publicadas</h2>

<?php if (empty($noticias)): ?>
    <p>No hay noticias disponibles.</p>

<?php else: ?>
    <ul>
        <?php foreach ($noticias as $n): ?>
            <li style="margin-bottom:20px;">
                <h3><?= htmlspecialchars($n['titulo']) ?></h3>
                <p><strong>Categoría:</strong> <?= htmlspecialchars($n['categoria']) ?></p>
                <p><?= nl2br(htmlspecialchars($n['texto'])) ?></p>
                <p><small><?= $n['fecha'] ?></small></p>

                <?php if (!empty($n['imagen'])): ?>
                    <img src="<?= $n['imagen'] ?>" alt="imagen" style="max-width:150px;">
                <?php endif; ?>
            </li>
        <?php endforeach; ?>
    </ul>
<?php endif; ?>

<a href="form_noticia.php">Insertar nueva noticia</a>

</body>
</html>
//hacer el paginado poniendo limit en la consulta, sera limit $row, $pag siendo pag 1,2,..... la que toque en el momento, para luego hacer pag*row+1 y mostrar
el numero de pagina y con esta opcion controlar en que fila empieza y termina de alguna manera, hay que refinarlo//
echo "[<a href=index.php>index</a>]";
