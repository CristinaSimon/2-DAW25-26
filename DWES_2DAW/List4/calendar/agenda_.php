<?php
require_once contacto::class;

$personas= []; // array vacío

$p1 = new Contacto("Ana López", "12345678A", "ana@email", "600111222");
$p2 = new Contacto("Luis Gómez", "87654321B","luis@email", "600333444");
$p3 = new Contacto("María Fernández", "11223344C", "maria@email.com", "600555666");
$p4 = new Contacto("Carlos Ruiz", "22334455D", "carlos@email.com", "600777888");
$p5 = new Contacto("Elena Torres", "33445566E", "elena@email.com", "600999000");
$p6 = new Contacto("Javier Ortega", "44556677F", "javier@email.com", "600123456");


// Añadirlos al array
array_push($personas, $p1, $p2, $p3, $p4, $p5, $p6);

public function addPerson($p){

}; // Devuelve el número de personas en la agenda.
public function deletePerson($p){

};
public function __toString(){

};  // Muestra la información del calendario.
public function searchPerson($dni){

};
public function isPerson($p){

}; // Devuelve true si la persona está en la agenda.