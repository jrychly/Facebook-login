<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "reg";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    if(isset($_POST['submitbtn'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $password = $_POST['pwd'];
        $password2 = md5($password);

        $sql = "INSERT INTO registrace (name ,email, heslo) VALUES ('$name', '$email', '$password2')";

        if ($conn->query($sql) === TRUE) {
            echo "Registrace proběhla úspěšně";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }


    }
?>
