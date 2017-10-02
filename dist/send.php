<?php
    $name = $_GET["name"];
    $email = $_GET["email"];
?>

<!DOCTYPE html>
<html lang="cs">
    <head><!-- Definice meta tagů -->
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=0.7, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge"><!-- CSS -->
        <link rel="stylesheet" type="text/css" href="styles/style.css"><!-- JS -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script><!-- Ostatní parametry -->
        <title>FBLogin</title>
    </head>
    <body>
        <script src="scripts/script.js"></script>
        <div id="fb-root"></div>
        <h1>FBLogin</h1>
        <?php echo $name ."<br>" . $email ?>
        <br>
        <form action='db.php' method='post'>
            <label>Nastavte heslo: </label>
            <?php echo "<input type='hidden' name='name' value='" . $name . "'>" ?>
            <?php echo "<input type='hidden' name='email' value='" . $email . "'>" ?>
            <input type="password" placeholder="••••••••" name="pwd"><br>
            <button type="submit" name="submitbtn">Nastavit heslo</button>
        </form>
    </body>
</html>
