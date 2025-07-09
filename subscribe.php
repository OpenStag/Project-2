<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['email'])) {
    $email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
    if ($email) {
        $file = fopen('newsletter.txt', 'a');
        fwrite($file, $email . "\n");
        fclose($file);
        echo '<div class="newsletter-success">Thank you for subscribing!</div>';
    } else {
        echo '<div class="newsletter-success">Invalid email address.</div>';
    }
} else {
    echo '<div class="newsletter-success">Please enter your email.</div>';
}
?> 