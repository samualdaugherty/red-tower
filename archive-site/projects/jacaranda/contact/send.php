<?php

// "samual.daugherty@gmail.com"
define("SEND_EMAIL_TO", "hello@redtowerdigital.com");

$name = trim($_POST["name"]);
$company = trim($_POST["company"]);
$description = trim($_POST["description"]);
$budget = trim($_POST["budget"]);
$timeframe = trim($_POST["timeframe"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);

$errors = array();

function has_value($val) {
    return !isset($val) || empty($val);
}

function is_valid_email($email) {
    return !filter_var($email, FILTER_VALIDATE_EMAIL);
}

//NAME
if ( has_value($name) )  {
    $errors['name'] = "Name is required";
}

if ( has_value($description) )  {
    $errors['description'] = "Description is required";
}

//EMAIL
if ( has_value($email) ) {
    $errors['email'] = "Email is required";
}
else if( is_valid_email($email) ) {
    $errors['email'] = "Enter a valid email";
}


// there is an error
if(count($errors) > 0) {
    echo json_encode(['code' => 400, "errors" => $errors]);
    exit;
}
// no error
else {
    $to = SEND_EMAIL_TO;
    $subject = 'Red Tower Contact Form';

    $message = "";
    $message .= "Name: " . $name . "\n";
    $message .= "Company: " . $company  . "\n";
    $message .= "Budget: " . $budget  . "\n";
    $message .= "Timeframe: " . $timeframe  . "\n";
    $message .= "Email: " . $email  . "\n";
    $message .= "Phone: " . $phone  . "\n\n";
    $message .= "Description: \n" . $description;

    $headers = 'From: ' . SEND_EMAIL_TO . "\r\n" .
        'Reply-To: ' . SEND_EMAIL_TO . "\r\n";

    mail($to, $subject, $message, $headers);

    echo json_encode(['code' => 200, "errors" => null]);
}
