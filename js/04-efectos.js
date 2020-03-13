$(document).ready(function () {
    var btn_mostrar = $('#mostrar');
    var btn_ocultar = $('#ocultar');
    var caja = $('#caja');
    var uno = $('#todoenuno');
    var animar = $("#animar");

    btn_mostrar.hide();

    btn_ocultar.click(function () {
        btn_ocultar.hide();
        btn_mostrar.show();
        //caja.fadeOut('slow');
        caja.fadeTo('slow', 0.2);
    });

    btn_mostrar.click(function () {
        btn_mostrar.hide();
        btn_ocultar.show();
        //caja.fadeIn('slow');
        caja.fadeTo('slow', 0.8);
    });

    /*uno.click(function(){
        caja.toggle('fast');
    });*/

    /*uno.click(function(){
        caja.fadeToggle('fast');
    });*/

    uno.click(function () {
        caja.slideToggle('fast');
    });

    animar.click(function () {
        caja.animate({
            marginLeft: '500px',
            fontSize: '40px',
            heigth: 'auto'
        }, 'slow')
            .animate({
                borderRadius: '900px',
                marginTop: '100px'
            }, 'normal')
            .animate({
                borderRadius: '0px',
                marginLeft: '0px'
            }, 'normal')
            .animate({
                borderRadius: '100px',
                marginTop: '0px'
            }, 'normal')
            .animate({
                marginLeft: '500px',
                fontSize: '40px',
                heigth: 'auto'
            }, 'slow');
    });
});