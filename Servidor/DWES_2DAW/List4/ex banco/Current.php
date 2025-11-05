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
    public abstract function getNumCuenta(): string{
        return $this->numCuenta;
    }
    public abstract function getSaldo(): string{
        return $this->saldo;
    }
    public abstract function retirarSaldo($retirar){
        if($this->saldo>=$retirar){
            $this->saldo -= $retirar;
        }
        else{
            echo "saldo insuficiente";
        }
    }
    public abstract function anadirSaldo($anadir){
        $this->saldo += $anadir;
    }

}