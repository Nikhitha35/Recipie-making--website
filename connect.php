<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Retrieve form data
$Username = $_POST['Username'];
$Email = $_POST['email'];
$Password = $_POST['password'];

// Database connection
$conn = new mysqli('localhost', 'root', '', 'Registrations');
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}
$stmt = $conn->prepare("INSERT INTO login (Username, email, password) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $Username, $Email, $Password);

if ($stmt->execute()) {
    header("Location: home.html");
} else {
    echo "Error: " . $stmt->error;
}
$stmt->close();
$conn->close();
?>