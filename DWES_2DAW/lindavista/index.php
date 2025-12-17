<?php
session_start();


if (isset($_SESSION['usuario'])) {
    echo "News Management <br> User: " . $_SESSION['usuario'] . "<br>";
    echo "
 -----------------------
    <ul>
    <li><a href='list_news.php'>list of new</a></li>
    <li><a href='insert_news.php'>Inser a piece os news</a></li>
    <li><a href='delete_new.php'>Delete news</a></li>
    </ul>
  -----------------------
  <br>
  <br>
  [<a href=logout.php>logout</a>]
    ";


} else {
    header("Location: login.php");
    exit();
}

