<?php
if ($_POST["email"]<>'') {
    //$ToEmail = 'info@risinglemon.com';
    $ToEmail = 'info@risinglemon.com';
    $EmailSubject = 'Site Contact Form';
    $mailheader = "From: ".$_POST["email"]."\r\n";
    $mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n";
    $MESSAGE_BODY = " ".$_POST["message"]."";
    mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader) or die ("Failure");
?>
<head>
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css">
    <link href="css/style.css" rel="stylesheet" type="text/css">
    <meta http-equiv=REFRESH CONTENT=5;url=index.html>
    <title>Rising Lemon Guest House</title>

<link rel="shortcut icon" href="images/fav.png" />
    </head>

<body>
    <div class="validation_box">
<div class='validation_box_header'>Message Has Been Sent</div>
<div class='validation_image'><img src='images/success.png' width='75px'></div>

</body>
<?php
header( "refresh:5;url=index.html" );
} else {
?>
<head>
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css">
    <link href="css/style.css" rel="stylesheet" type="text/css">
    <meta http-equiv=REFRESH CONTENT=5;url=index.html>
    <title>Rising Lemon Guest House</title>

<link rel="shortcut icon" href="images/fav.png" />
    </head>

<body>
    <div class="validation_box">
<div class='validation_box_header'>Message Could Not Be Sent" . "</div>
<div class='validation_image'><img src='images/failure.png' width='75px'></div>
</body>
<?php
header( "refresh:5;url=index.html" );
};
?>