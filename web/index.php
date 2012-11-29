<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <link rel="stylesheet" href="css/style.css" type="text/css">

    <script src="js/lib/ArrayShuffle.js"></script>
    <script src="js/lib/jquery.js"></script>
    <script src="js/lib/jquery-ui/js/jquery-ui-1.9.2.custom.js"></script>
    <script src="js/lib/class.js"></script>
    <script src="js/PuzzleArea.js"></script>
    <script src="js/SourceArea.js"></script>
    <script src="js/TargetArea.js"></script>
    <script src="js/Site.js"></script>

    <script>
        var targetArea = new TargetArea();
        var sourceArea = new SourceArea();

        $(function()
        {
            var site = new Site();
            site.initSite();
        });
    </script>
    <title>Frontend</title>
</head>

<body>

<div id="container"></div>

</body>
</html>