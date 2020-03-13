$(document).ready(function () {
    reloadLinks();
    var link = $('#add_link');
    var boton = $('#add_button').removeAttr('disabled');
    var menu = $('#menu');

    boton.click(function () {
        menu.prepend('<li><a href="' + link.val() + '"></a></li>');
        link.val('');
        reloadLinks();
    });

    function reloadLinks() {
        $('a').each(function (index) {
            var elemento = $(this);
            var enlace = elemento.attr("href");
            elemento.text(enlace).attr("target", "_blank");
        });
    }

});