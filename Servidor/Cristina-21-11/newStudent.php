<?php
require_once "student.php";
session_start();
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<?php
if(isset($_REQUEST['cancel'])){
    header("Location: index.php");
}else{
    while (!isset($_REQUEST['cancel'])){
        if(isset($_REQUEST['submit'])){

            $year = $_REQUEST['year'];
            $a_student=[];
            $lastname = $_REQUEST['lastname'];
            $firstname = $_REQUEST['firstname'];
            if ($lastname==''){
                $errls='Cant be blanc';
            }
            if($firstName == ''){
                $errnam='Cant be blanc';
            };

            $student = [$lastName, $firstName, $year];
            $a_student[] = $student;

        }else{
            echo "
            <form method='post' name='aadStudent'>
            <label>Last name</label><input type='text' name='lastname' placeholder='Lastname'><br>
            <span>.$errls.</span>
            <label>Name</label><input type='text' name='name' placeholder='Name'><br>
            <span>.$errnam.</span>
            <label>Year</label><select name='year' placeholder='Years'> 
                <opcion>first</opcion>
                <opcion>second</opcion>
            </select><br>
            <input type='submit' name='submit' value='Submit'>
            <input type='submit' name='cancel' value='cancel'>
            </form>
            ";
        }
        $_SESSION['Student'][] = $a_student;
    }
}
?>

</body>
</html>


