<?php
require_once "newStudent.php";
require_once "newSubjet.php";
session_start();

if(isset($_SESSION['student']) and isset($_SESSION['subjet'])){
    $student = $_SESSION['student'];
    $subjet = $_SESSION['subjet'];

}
