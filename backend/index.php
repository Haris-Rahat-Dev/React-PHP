<?php
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
    header('Access-Control-Allow-Headers: token, Content-Type');
    header('Access-Control-Max-Age: 1728000');
    header('Content-Length: 0');
    header('Content-Type: text/plain');
    die();
}

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

const hostname = "localhost";
const username = "root";
const password = "";
const database = "php_test_table";


$conn = new mysqli(hostname, username, password, database);
if($conn -> connect_error)
{
    die("Connection failed:".$conn -> connect_error);
}
else{
    echo"Connection made successfully";
}



$postData = file_get_contents("php://input");
$request = json_decode($postData);
$fName = $request->firstName;
$lName = $request->lastName;
$email = $request->email;
$password = $request->password;



$qry = "INSERT INTO users (first_name, last_name, email, password) VALUES ('$fName','$lName','$email','$password')";

if($conn->query($qry)==true){
    $success = array(
        (object)array("message" => "success"),
        (object)array("status" => "200")
    );
    echo json_encode($success);
} else {
    echo "Error: " . $qry . "<br> Database error:" . $conn->error;
};
