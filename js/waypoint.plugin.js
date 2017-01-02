<!--  waypoint javascript for skill animation --> 
$(document).ready(function () {
        $('.bar').each(function () {
            $(this).addClass('setWideToNone');
        });

        $('.bar').waypoint(function () {

            $(this).removeClass('setWideToNone').addClass('widthAnim');

        },{
            triggerOnce:true,
            offset:'bottom-in-view'
        });
    });