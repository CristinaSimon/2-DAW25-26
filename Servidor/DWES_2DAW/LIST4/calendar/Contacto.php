<?php

class Contacto
{
protected $name;
protected $dni;
protected $email;
protected $telefono;

public function __construct($name, $dni, $email, $telefono){
    $this->name = $name;
    $this->dni = $dni;
    $this->email = $email;
    $this->telefono = $telefono;
}
public function __toString(): string
{
   return "Nombre: ".$this->name." DNI: ".$this->dni." Email: ".$this->email." Telefono: ".$this->telefono."<br>";
}

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param mixed $name
     */
    public function setName($name): void
    {
        $this->name = $name;
    }

    /**
     * @return mixed
     */
    public function getDni()
    {
        return $this->dni;
    }

    /**
     * @param mixed $dni
     */
    public function setDni($dni): void
    {
        $this->dni = $dni;
    }

    /**
     * @return mixed
     */
    public function getTelefono()
    {
        return $this->telefono;
    }

    /**
     * @param mixed $telefono
     */
    public function setTelefono($telefono): void
    {
        $this->telefono = $telefono;
    }

    /**
     * @return mixed
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * @param mixed $email
     */
    public function setEmail($email): void
    {
        $this->email = $email;
    }

}