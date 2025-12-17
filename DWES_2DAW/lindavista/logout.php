<?php
session_start();
if (isset($_SESSION['usuario'])) {
    echo "Logout <br> User: " . $_SESSION['usuario'] . "<br>";
    session_destroy();

} else {
    echo " Not logged in <br> if you want to log in click <a href='login.php'>here</a>";
    exit();
}