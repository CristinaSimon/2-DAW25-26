<?php
$numMul=$_REQUEST['numTab'];
$resultado=$_REQUEST['result'];
$error=0;
$correciones="";
if (isset($_REQUEST['enviar'])){
    for ($i=1; $i<=10; $i++){
        $i*$numMul;
        if(($i*$numMul)!= $resultado[$i-1]){
            $error++;
            $correciones.="El resultado de la multiplicacion es: ".$i*$numMul." no ".$resultado[$i-1]."<br>";
        }
    }
    echo $correciones;
    echo "Tus errores son: ".$error."<br>";

}
