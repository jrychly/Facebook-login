<!DOCTYPE html>
<html lang="cs">
    <head><!-- Definice meta tagů -->
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=0.7, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge"><!-- CSS -->
        <link rel="stylesheet" type="text/css" href="styles/style.css"><!-- JS -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script><!-- Ostatní parametry -->
        <title>FBLogin</title>
    </head>
    <body>
        <script src="scripts/script.js"></script>
        <div id="fb-root"></div>
        <h1>FBLogin</h1>
        <div class="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="false" onlogin="fbLogin();"></div>
        <div id="info"></div>
    </body>
</html>
