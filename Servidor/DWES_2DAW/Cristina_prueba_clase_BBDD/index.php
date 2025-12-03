<?php
require_once 'conexion.php';
session_start();
function alumnos()
{

    $pdo = new Connection();
    $conn = $pdo->getPdo();

    try {
        $stm = $conn->prepare("
            SELECT name, surname, description, students.id
            FROM students JOIN courses on (students.id = courses.id)
           ");

        $stm->execute();

        return $stm->fetchAll(PDO::FETCH_ASSOC);

    } catch (PDOException $exception) {
        echo "Error: " . $exception->getMessage();
        return [];
    }
}
$alumnos = alumnos();
?>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Cristina Simon</title>
</head>
<body>
<table  border='1' cellspacing='0px' cellpadding='10px' width='fix-content'>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Course</th>
    <th>Actions</th>
    <th>Actions</th>
<?php foreach ($alumnos as $alum): ?>
    <tr>
        <td><?= $alum['name'] ?></td>
        <td><?= $alum['surname'] ?></td>
        <td><?= $alum['description'] ?></td>
        <td> <a href="borrar.php">Borrar</a></td>
        <td><a href="editar.php">Editar</a></td>
        <?=$SESION['stId'] = $alum['id']?>
    </tr>
<?php endforeach;
function borrar (){
    echo "entro en borrar";
}
function editar (){}

?>

</table>
</body>
</html>
