<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get form inputs safely
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Receiver email (your business inbox)
    $to = "designatscreensource@gmail.com"; // Change if needed

    // Email subject line
    $email_subject = "New Contact Form Submission: " . $subject;

    // Message content
    $email_body = "
    <html>
    <body style='font-family:Poppins, sans-serif;'>
      <h2>New Message from Website Contact Form</h2>
      <p><strong>Name:</strong> {$name}</p>
      <p><strong>Email:</strong> {$email}</p>
      <p><strong>Subject:</strong> {$subject}</p>
      <p><strong>Message:</strong><br>{$message}</p>
      <hr>
      <p style='font-size:12px;color:#888;'>This email was sent from your website contact form.</p>
    </body>
    </html>
    ";

    // Email headers
    $headers = "From: Screen Source India <designatscreensource@gmail.com>\r\n";
    $headers .= "Reply-To: {$email}\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Send the email
    if(mail($to, $email_subject, $email_body, $headers)) {
        echo "<script>alert('✅ Message sent successfully!'); window.history.back();</script>";
    } else {
        echo "<script>alert('❌ Failed to send message. Please try again.'); window.history.back();</script>";
    }

} else {
    echo "Access Denied";
}
?>
