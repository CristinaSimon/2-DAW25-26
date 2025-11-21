<?php
session_start();
$user= array("mperez"=>"uno", "sfernandez"=>"dos", "mluque"=>"tres", "acalvo"=>"cuatro");
$errlogin='';
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
<?php
if (isset($_REQUEST['submit']) || $_SESSION['username']) {/*Comprobar usuario y pass y añadirlo a la sesion de usuario y si existe mostrar el menu*/
    $name=$_REQUEST['name'];
    $pass=$_REQUEST['pass'];
    foreach ( $user as $key => $value ) {
        if ($key==$name && $pass==$value) {
            $_SESSION['username']=$name;

        }else{
            $errlogin='Wrong credentials';
        }
    }
    echo"hello: ".$_SESSION['username'] ."<br><br>";
    echo "<a href='newStudent.php' > New Student</a> <br>";
    echo "<a href='newSubjet.php' > New Subjet</a> <br>";
    echo "<a href='enrol.php' > Enrol Student</a> <br>";
    echo "<a href='listStudent.php' > List by Students</a> <br>";
    echo "<a href='listSubjet.php' > List by Subjet</a> <br>";
    echo "<br><br> <a href='logout.php' > Logout</a> <br>";

}else{/*En caso de que no exista ni el submit ni el username mostramos el formulario*/
    echo "
            <form method='post' name='reguister'>
                <input type='text' name='name' placeholder='Name'> <br>
                <input type='password' name='pass' placeholder='Passwors'><br>
                <input type='submit' value='Login' name='submit'><br>
                <span>".$errlogin."</span>
            </form>";

    }
?>
</body>
</html>

