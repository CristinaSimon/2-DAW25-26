<?php

class student
{
    private $NUMBER_HOURS_MAX=100;

    protected $firstname;
    protected $lastname;
    protected $hours;
    protected $year;

    /**
     * @param $firstname
     * @param $lastname
     * @param $year
     */
    public function __construct($firstname, $lastname, $year)
    {
        $this->firstname = $firstname;
        $this->lastname = $lastname;
        $this->year = $year;
    }


    /**
     * @param mixed $firstname
     */
    public function setFirstname($firstname)
    {
        $this->firstname = $firstname;
    }

    /**
     * @param mixed $lastname
     */
    public function setLastname($lastname)
    {
        $this->lastname = $lastname;
    }

    /**
     * @param mixed $year
     */
    public function setYear($year)
    {
        $this->year = $year;
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
    public function getFirstname()
    {
        return $this->firstname;
    }

    /**
     * @return mixed
     */
    public function getLastname()
    {
        return $this->lastname;
    }

    /**
     * @return mixed
     */
    public function getYear()
    {
        return $this->year;
    }

    /**
     * @return mixed
     */
    public function getHours()
    {
        if (this->hours <$this->NUMBER_HOURS_MAX) {
            return $this->hours;
        }else{
            return 'cant add more hours';
        }

    }
    public function __toString()
    {
        return $this->lastname.' '.$this->firstname.' '.$this->year.' years';
    }


}