<?php
    include("database.php");
    if(isset($_POST["Signup"]))
        {
            if(isset($_POST["First_Name"]))
            {
                $fname = $_POST['First_Name'];
            }

            if(isset($_POST["Last_Name"]))
            {
                $lname = $_POST['Last_Name'];
            }

            if(isset($_POST["Birth_Date"]))
            {
                $bdate = $_POST['Birth_Date'];
            }

            if(isset($_POST["Gender"]))
            {
                $gender = $_POST['Gender'];
            }

            if(isset($_POST["Phone_number"]))
            {
                $phone = $_POST['Phone_number'];
            }

            if(isset($_POST["E-mail"]))
            {
                $email = $_POST['E-mail'];
            }

            if(isset($_POST["Password"]))
            {
                $passwd = $_POST['Password'];
            }

            $sql = "INSERT INTO users (First_Name, Last_Name, Birth_Date,
            Gender, Phone_number, `E-mail`, Password)
            VALUES ('$fname','$lname', '$bdate',  '$gender', '$phone',
            '$email',  '$passwd')";

            if (mysqli_query($conn, $sql)) {
                header("Location: signupsuccess.php");
            } else {
                header("Location: failsignup.html");
            }



        }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup Page</title>
    <link rel="stylesheet" href="styles/signup.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jacques+Francois&display=swap" rel="stylesheet">
</head>
<body>
    <div class="upperpart">
        <form action="<?php htmlspecialchars($_SERVER["PHP_SELF"])?>" method="POST">
        
        <p class="title">Sign up</p>
        <p class="email">First Name</p>
        <input type="text" name="First_Name" class="inputBox">
        <p class="email">Last Name</p>
        <input type="text" name="Last_Name" class="inputBox">
        <br>
        <p class="email">Birth Date</p>
        <input type="date" name="Birth_Date" class="inputBox">
        <br>
        <p class="email">Gender:</p>
        <div class="Sexe">
            <label for="h">Male:</label>
            <input type="radio" name="Gender" id="h" value="Homme">
            <label for="f">Female:</label>
            <input type="radio" name="Gender" id="f" value="Femme">
        </div>
        <br>
        <p class="email">Phone number</p>
        <input type="text" name="Phone_number" class="inputBox">
        <br>
        <p class="email">E-mail</p>
        <input type="email" name="E-mail" class="inputBox">
        <br>
        <p class="email">Password</p>
        <input type="password" name="Password" class="inputBox">
        <br>
        <input class="Signup" type="submit" name="Signup" value="Signup"><br>
        <a href="LoginPage.html" class="to_login">Already have an account</a>
        <div id="error-container">
            <div>
                <img src="./icons/error-sign.png">
            </div>
            <div id="error-text">Empty spaces to be filled</div>
            
        </div>
        
    </form>

    </div>
    <div class="retour" onclick="back_tohome()">
        &gt;
    </div>
</body>
<script src="js/bktohome.js"></script>
</html>


<?php mysqli_close( $conn ); ?> 