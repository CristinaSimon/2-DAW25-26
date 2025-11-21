<?php

class subjet
{
    protected $hours;
    protected $name;
    protected $year;
    public function __construct($hours,$name,$year){
        $this->hours = $hours;
        $this->name = $name;
        $this->year = $year;
    }

    /**
     * @return mixed
     */
    public function getHours()
    {
        return $this->hours;
    }

    /**
     * @param mixed $hours
     */
    public function setHours($hours)
    {
        $this->hours = $hours;
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
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * @return mixed
     */
    public function getYear()
    {
        return $this->year;
    }

    /**
     * @param mixed $year
     */
    public function setYear($year)
    {
        $this->year = $year;
    }

     public function __toString(){
        return "Subjet: ".$this->name.' Year: '.$this->year."Hours per year".$this->hours;
     }

}