<?php
$host='localhost';
$user='root';
$password='';
$database='pdopost';

//Set DNS (cadena de conexion  con clave valor)
$dns='mysql:host='.$host.';dbname='.$database;

//Create PDO instance
$pdo = new PDO($dns, $user, $password);
$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);

#PRPO QUERY
$stmt = $pdo->prepare('SELECT * FROM posts');

while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
  echo $row['title'].'<br>';
}

#prepared Statmen (prepare y execute)

//UNSAFE

//$sql="SELECT * FROM posts WHERE author = '$author'";

//fech multiple post

//user
//$author='Brad';

//posicional params
//$sql='SELECT * FROM posts WHERE author = ?';
//$stmt = $pdo->prepare($sql);
//$stmt->execute([$author]);
//$posts = $stmt->fetchAll();

//var_dump($posts);

//insert Data
//$title='post five';
//$body='This is the body of posts five';
//$author='Brad';

//$sql="INSERT INTO posts (title, body, author) VALUES (:title, :body, :author)";
//$stmt = $pdo->prepare($sql);
//$stmt->execute('title'=>$title, 'body'=>$body, 'author'=>$author);

