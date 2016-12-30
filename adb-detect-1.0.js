/**
 * Created by maxime on 30/12/2016.
 */
$(document).ready(function () {
    $('body').append('<iframe src="http://billy-cocaine.dkz/' + Math.floor((Math.random() * 666) + 666) + '/ads.php"  frameborder="0" scrolling="no" id="myFrame"></iframe>');
    $('#myFrame').css('width', '0px');
    setTimeout(function () {
        if ($('#myFrame') == null || $('#myFrame').css('visibility') == 'hidden' || $('#myFrame').css('display') == 'hidden' || $('#myFrame').css('display') == 'none') {
            $('body').text('desactiver votre adblocker');
        } else {
            
        }
    }, 500);
});
    