<?php
$field_name = $_POST['ct_name'];
$field_email = $_POST['ct_email'];
$field_message = $_POST['ct_message'];


$mail_to = 'enzo-vezzaro@live.it';
$subject = 'Hi Enzo, '.$field_name;

$body_message = 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Message: '.$field_message;

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$mail_to."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
 <script language="javascript" type="text/javascript">
  alert('Thank you for the message. We will contact you shortly.');
  window.location = 'index.html';
 </script>
<?php
}
else { ?>
 <script language="javascript" type="text/javascript">
  alert('Message sending failed. Please, send an email to enzo-vezzaro@live.it');
  window.location = 'index.html';
 </script>
<?php
}
?>
