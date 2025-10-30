<?php
/**
 * Figure class will contain information that is common to all shapes. The attributes $x and
 * $y represent the coordinates for its representation in the plane.
 * class Figure {
 * protected $x;
 * protected $y;
 * function __construct($x, $y) {
 * $this->x=x;
 * $this->y=y;
 * }
 * }
 * All figures have an area so you have to include a method which is the calculation of
 * this area.
 * public function area();
 * The problem is to know which figure we are talking about because Figure class is
 * an abstraction of all the figures in the world. It is reasonable to believe that we won't
 * make objects from this class. These classes are abstract and thus will be defined in PHP.
 * abstract class Figure {
 * protected $x;
 * protected $y;
 * public function __construct($x, $y) {
 * $this->x=$x;
 * $this->y=$y;
 * }
 * public abstract function area();
 * }
 * The area () method is also declared as abstract. This tells the compiler that will be coded
 * later in the sub classes that inherit from the Figure class.
 * Suppose that we want to build circles or rectangles objects. To do this, we must code
 * two new classes called Circle and Rectangle respectively. Both classes are geometric
 * figures therefore inherit from the Figure class.
 **/

abstract class Figure {
    protected $x;
    protected $y;
    /**x e Y con las coordenadas de inicio. en el caso de circulo el centro en el caso del rectanculo esquina superior derecha
     * **/
    public function __construct($x, $y) {
        $this->x=$x;
        $this->y=$y;
    }
    public abstract function area();
}
class Circle extends Figure{
    protected $radio;
    function __construct($x, $y) {

    }

    function area() {
        $this->radio* M_PI;
    }
    public function __toString(): string
    {
        // TODO: Implement __toString() method.
    }
}

class Rectangle extends Figure{
    function __construct($x, $y) {
        parent::__construct($x, $y);

    }
    function area() {
        return $x*$y;
    }
}

