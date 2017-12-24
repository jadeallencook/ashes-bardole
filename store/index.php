<!doctype html>
<html class="no-js" lang="en">
    <?php 
        // meta data and css 
        include_once('components/head.php');
    ?>
    <body>
        <?php 
            // ie message
            include_once('components/ie.php'); 
            // main wrapper 
            echo '<div class="wrapper wrap__box__style--1">';
            // page build
            include_once('components/navbar.php');
            include_once('components/external-menus.php');
            include_once('components/sale-banner.php'); 
            include_once('components/content-container.php'); 
            // end main wrapper
            echo '</div>';
            // product zoom view
            include_once('components/zoom-view.php');
            // js
            include_once('components/js.php'); 
        ?>
    </body>
</html>