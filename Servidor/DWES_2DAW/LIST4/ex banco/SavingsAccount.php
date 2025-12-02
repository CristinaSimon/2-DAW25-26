<?php

namespace banco;

use BcMath\Number;

class SavingsAccount extends Current
{
    protected Number $minbalance;
    protected Number|int $interes=4;

    public function __construct($numCuenta, $saldo)
    {
        parent::__construct($numCuenta, $saldo);
    }

    public function getNumCuenta(): string
    {
        return parent::getNumCuenta();
    }

    public function getSaldo(): string
    {
       return parent::getSaldo();
    }

    public function getMinbalance(): Number
    {
        return $this->minbalance;
    }

    public function setMinbalance(Number $minbalance): void
    {
        if ($minbalance<1){
            echo "the minbalance must be greater than 0";
        }
        $this->minbalance = $minbalance;
    }
    public function retirarSaldo($retirar)
    {
       return parent::retirarSaldo($retirar);
    }

    public function anadirSaldo($anadir)
    {
        return parent::anadirSaldo($anadir);
    }


    public function calcularInteres()
    {
        if ($this->saldo < $this->minbalance){
            return $interes%2;
        }
    }
}