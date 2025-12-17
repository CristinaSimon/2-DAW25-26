<?php

class User
{
    private $name;
    private $surname;
    private $birthday;
    private $country;

    /**
     * @param $name
     * @param $surname
     * @param $birthday
     * @param $country
     */
    public function __construct($name, $surname, $birthday, $country)
    {
        $this->name = $name;
        $this->surname = $surname;
        $this->birthday = $birthday;
        $this->country = $country;
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
    public function getSurname()
    {
        return $this->surname;
    }

    /**
     * @param mixed $surname
     */
    public function setSurname($surname): void
    {
        $this->surname = $surname;
    }

    /**
     * @return mixed
     */
    public function getBirthday()
    {
        return $this->birthday;
    }

    /**
     * @param mixed $brirthday
     */
    public function setBirthday($birthday): void
    {
        $this->birthday = $birthday;
    }

    /**
     * @return mixed
     */
    public function getCountry()
    {
        return $this->country;
    }

    /**
     * @param mixed $country
     */
    public function setCountry($country): void
    {
        $this->country = $country;
    }


    public static function getUsers(){
        $content=file_get_contents('../data/usuarios.json');
        return $content;
    }
    public static function getUser($index){
    $content=file_get_contents('../data/usuarios.json');
    $user=json_decode($content,associative: true);
    return json_encode($user[$index]);
    }

    public function create(){
        $content=file_get_contents('../data/usuarios.json');
        $users=json_decode($content,associative: true);
        $users[]=array(
            "name"=>$this->name,
            "surname"=>$this->surname,
            "birdDay"=>$this->birthday,
            "country"=>$this->country
        );
        $file=fopen("../data/usuarios.json","w");
        fwrite($file,json_encode($users));
        fclose($file);
    }

    }