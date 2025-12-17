<?php
$numMul=$_REQUEST['numTabla'];
if (isset($_REQUEST['enviar'])) {
    echo "<table border='1' cellspacing='0px' cellpadding='0px' width='100px'>";
    for ($fila=1; $fila<=10; $fila++){
        echo "<tr> <td>".$numMul." x ".$fila."</td><td> = </td> <td>". $numMul*$fila."</td></tr>";
    }
    echo "</table>";
}
?>
