<?php
$numMul=$_REQUEST['numTab'];
if (isset($_REQUEST['enviar'])) {
    echo "<table border='1' cellspacing='0px' cellpadding='0px' >";
    echo "<form method='POST' action='tabla2.php' name='tabla2'>";
    for ($fila=1; $fila<=10; $fila++){
        echo "<tr> <td>".$numMul." x ".$fila."</td><td> = </td> <td> <input type='number' name='result[]'></td></tr>";
    }
    echo "</table>";
    echo "<input type='hidden' name='numTab' value='".$numMul."'>";
    echo "<input type='submit' name='enviar' value='enviar'>";
}

