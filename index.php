<?php
include("database.php");

$sql = "INSERT INTO users (id, First_Name, Last_Name, Birth_Date,
        Gender, Phone_number, `E-mail`, Password)
        VALUES (1,'rodrigo', 'depaul', '1987-05-21', 'Male', '94530247',
        'killer@gmail.com', 'apaza')";

if (mysqli_query($conn, $sql)) {
    echo "Insertion completed successfully";
} else {
    echo "Error: " . mysqli_error($conn);
}

mysqli_close($conn);
?>
