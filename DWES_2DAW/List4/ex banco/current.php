<?php

namespace banco;

abstract class current
{
    protected $numCuenta;
    protected $saldo;
    public  function __construct($numCuenta, $saldo){
        $this->numCuenta = $numCuenta;
        $this->saldo = $saldo;
    }
    public function getNumCuenta(): string{
        return $this->numCuenta;
    }
    public function getSaldo(): string{
        return $this->saldo;
    }

    /**
     * @param mixed $numCuenta
     */
    public function setNumCuenta($numCuenta): void
    {
        $this->numCuenta = $numCuenta;
    }

    /**
     * @param mixed $saldo
     */
    public function setSaldo($saldo): void
    {
        if($saldo < 0){
            echo "El saldo no puede ser menor a 0";
        }
        $this->saldo = $saldo;
    }
    public function retirarSaldo($retirar){
        if($this->saldo>=$retirar){
            $this->saldo -= $retirar;
        }
        else{
            echo "saldo insuficiente";
        }
    }
    public function anadirSaldo($anadir){
        if($anadir<=0){
            echo "No estas metiendo un saldo valido";
        }
        $this->saldo += $anadir;
    }
    public abstract function calcularInteres();

}