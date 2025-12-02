<?php

namespace banco;

class Client
{
    protected string $name;
    protected string $dni;
    protected array $cuentas;
    public function __construct(string $name, string $dni, array $cuentas){
        $this->name = $name;
        $this->dni = $dni;
        $this->cuentas = $cuentas;
    }
    public function getName(): string{
        return $this->name;
    }
    public function getDni(): string{
        return $this->dni;
    }
    public function getCuentas(): array{
        return $this->cuentas;
    }
    public function setCuentas(array $cuentas): void{
        if($cuentas.length()>=10){
            echo "you don't have more than 10 current";
        }
        else{
            $cuentas.array_push($this->cuentas, $cuentas);
        }
    }
    public function setName(string $name): void{
        if($name==""){
            echo "you don't have name";
        }
        else{
            $this->name = $name;
        }
    }
    public function setDni(string $dni): void{
        if($dni==""){
            echo "you don't have dni";
        }
        else{
            $this->dni = $dni;
        }
    }

}