<?php
session_start();

function listarNoticias()
{
    $rows=1;
    $pag=1;
    $nexPag= $pag*$rows+1;
    $pdo = new Connection();
    $conn = $pdo->getPdo();

    try {
        $stm = $conn->prepare("SELECT id, titulo, texto, categoria, fecha, img 
                               FROM noticias LIMIT $rows,$nexPag");
        $stm->execute();

        return $stm->fetchAll(PDO::FETCH_ASSOC);
        $pag++;
    } catch (PDOException $exception) {
        echo "Error: " . $exception->getMessage();
        return [];
    }
}
echo "Estas en listar noticias <br>";
/*hacer el paginado poniendo limit en la consulta, sera limit $row, $pag siendo pag 1,2,..... la que toque en el momento, para luego hacer pag*row+1 y mostrar
el numero de pagina y con esta opcion controlar en que fila empieza y termina de alguna manera, hay que refinarlo*/
echo "[<a href=index.php>index</a>]";