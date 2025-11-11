<?php
require_once 'Contacto.php';
class agenda
{
private array $person =[];

    public function addPerson($p): int
    {
        array_push($this->person,$p);
        return count($this->person);

    } // Devuelve el número de personas en la agenda.
    public function deletePerson($nombre): void
    {
        foreach ($this->person as $key => $pd) {
            if ($pd == $nombre) {
                unset($this->person[$key]);
            }
        }
    }
    public function __toString(){
        $result = "";
        foreach($this->person as $person){
            $result .= $person . "\n";
        }
        return $result;
    }  // Muestra la información del calendario.

    public function searchPerson($dni){
        foreach ($this->person as $person) {
            if($dni == $person->getDNI()){
                return $person;
            }

        }
        return "this person doesn't exist";
    }
    public function isPerson($nombre): bool
    {
        foreach ($this->person as $person) {
            if($nombre == $person){
                return true;
            }
        }
        return false;

    } // Devuelve true si la persona está en la agenda.

}
