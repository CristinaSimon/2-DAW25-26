<?php
session_start();
echo"good bye: ".$_SESSION['username'];
session_destroy();