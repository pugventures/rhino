<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link href="libs/font-awesome/css/font-awesome.css" rel="stylesheet">
        <link href="libs/Ionicons/css/ionicons.css" rel="stylesheet">
        <link href="libs/perfect-scrollbar/css/perfect-scrollbar.min.css" rel="stylesheet" type="text/css">
        <link href="libs/jquery-toggles/toggles-full.css" rel="stylesheet">
        <link href="css/amanda.css" rel="stylesheet" type="text/css">
        
        <title>RhinoIO v1 - Pug Ventures, LLC</title>
    </head>
    <body>
        <div id="RhinoIO">
            <authentication v-if="!this.$root.$data.user"></authentication>
            <dashboard v-if="this.$root.$data.user"></dashboard>
        </div>

        <!-- Javascript -->
        <script src="js/app.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vue-resource@1.3.5"></script>
        <script src="libs/jquery/jquery.js"></script>
        <script src="libs/popper.js/popper.js"></script>
        <script src="libs/bootstrap/bootstrap.js"></script>
        <script src="libs/perfect-scrollbar/js/perfect-scrollbar.jquery.min.js"></script>
        <script src="libs/jquery-toggles/toggles.min.js"></script>
        <script defer src="https://use.fontawesome.com/releases/v5.0.4/js/all.js"></script>
        <script src="js/amanda.js"></script>
    </body>
</html>
