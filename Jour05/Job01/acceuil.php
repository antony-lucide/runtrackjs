<?php
$db = new PDO('mysql:host=localhost; dbname=utilisateurs;charset=utf8','root','');
session_start();
    if(isset($_SESSION["id"])){
        var_dump($_SESSION["id"]);
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="acceuil.jS"></script>
    <title>acceuil</title>
</head>
    <body>
        <a class="profil", href="profil.php">
    </body>
</html>