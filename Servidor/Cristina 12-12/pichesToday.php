<?php
/**require "login.php";**/
session_start();

?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- Bootstrap Core -->
    <link href="./bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="bootstrap/js/bootstrap.min.js">
    <title>Cristina Simon </title>
</head>
<body>
    <nav class="navbar bg-info">
        <h3>Book</h3>
        <label class="h4"> Piches avialable today</label> <br>
        <label class="left">Signed in as <?=$_SESSION['username']?> </label>
        <a href="./logout.php" >Logout</a>

    </nav>
    <div>
        <form name="selectFecha" method="post">
            <label> Select your Date:  </label><input type="date" name="fechaReserva">
            <input type="submit" class="bg-info" name="reservation" value="reservation">
        </form>
    </div>
</body>
</html>

<?php
if(isset($_POST['reservation'])) {
    $fecha = $_POST['fechaReserva'];
    $_SESSION['fechaReserva'] = $fecha;
    $pdo= 'conexion.php';
     $stm=$pdo->prepare("SELECT * FROM reservations,pitches  where reservation.pichNumer=number.pichNumer");
     $stm->bindParam(":fecha",$fecha);
     $stm->execute();
     $mostrar = $stm->fetchAll(PDO::FETCH_ASSOC);

     foreach ($mostrar as $mostrar) {
         print_r($mostrar);
     }

}
