<?php include 'db.php'; ?>

<?php
$id = $_GET['id'];

$result = mysqli_query($conn, "SELECT * FROM student WHERE id=$id");
$row = mysqli_fetch_assoc($result);

if (isset($_POST['update'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $dept = $_POST['department'];

    mysqli_query($conn, "UPDATE student SET 
        name='$name',
        email='$email',
        mobile='$mobile',
        department='$dept'
        WHERE id=$id");

    header("Location: index.php");
}
?>

<form method="post">
    Name: <input type="text" name="name" value="<?php echo $row['name']; ?>"><br>
    Email: <input type="text" name="email" value="<?php echo $row['email']; ?>"><br>
    Mobile: <input type="text" name="mobile" value="<?php echo $row['mobile']; ?>"><br>
    Department: <input type="text" name="department" value="<?php echo $row['department']; ?>"><br>

    <input type="submit" name="update">
</form>