<?php
$conn = mysqli_connect("localhost", "root", "root", "studentdb");

if(!$conn)

    {
        die("Connection failed: ".mysqli_connect_error());
    }
    ?>