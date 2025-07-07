<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo 'Please enter a valid email address.';
        exit;
    }
    // Dummy action: pretend to save email
    echo 'Thank you for subscribing!';
    exit;
}
echo 'Invalid request.'; 