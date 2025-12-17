<?php
session_start();
require_once "coneccion.php";
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h2> Registred area <br> Entre your login and password to enter</h2>
    <div>
        <form>
            <input type="text" name="usuario" id="usuario"><br><br>
            <input type="text" name="password" id="password"><br><br>
            <input type="submit" value="Login">
        </form>
    </div>
    <?php
    if (!isset($_POST['usuario']) && isset($_REQUEST['password'])) {
        $usuario = htmlspecialchars($_POST['usuario']);
        $password = htmlspecialchars($_POST['password']);
        $clave_Encriptado = md5($password);
        $pdo=New Connection();
        $conn=$pdo->getPdo();
        try{
            $stm=$conn->prepare("SELECT usuario,  clave FROM usuarios WHERE usuarios=:usuario AND claves=:password");
            $stm->bindParam(":user", $usuario);
            $stm->bindParam(":password", $clave_Encriptado);
            $stm->execute();
            if($stm->rowCount()>0){
                $_SESSION['usuario'] = $usuario;
                header('Location: index_lindavista.php');
            }
        }catch (PDOException $exception){
            echo "Error: " . $exception->getMessage();
        }
    }
    ?>
</body>
</html>

