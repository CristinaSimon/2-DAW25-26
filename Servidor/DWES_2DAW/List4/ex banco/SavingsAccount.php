<?php

namespace banco;

use BcMath\Number;

class SavingsAccount extends Current
{
    protected Number $minbalance;
    public function __construct($numCuenta, $saldo)
    {
        parent::__construct($numCuenta, $saldo);
    }

    public function getNumCuenta(): string
    {
        // TODO: Implement getNumCuenta() method.
    }

    public function getSaldo(): string
    {
        // TODO: Implement getSaldo() method.
    }

    public function retirarSaldo($retirar)
    {
        // TODO: Implement retirarSaldo() method.
    }

    public function anadirSaldo($anadir)
    {
        // TODO: Implement anadirSaldo() method.
    }


}