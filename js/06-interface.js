$(document).ready(function () {

    //mover elemento por la pagina
    $('.elemento').draggable();

    //redimensionar
    $('.elemento').resizable();

    //sleccionar y ordenar elementos
    // $('.lista-seleccionable').selectable();
    $('.lista-seleccionable').sortable({
        update: function (event, ui) {
            console.log("ha cambiado la lista");
        }
    });
    $('.lista-seleccionable').disableSelection();

    //drop
    $('#elemento-movido').draggable();
    $('#area').droppable({
        drop: function () {
            console.log("Has soltado algo dentro del area");
        }
    });

    //efectos
    $('#mostrar').click(function () {
        //$('.caja-efectos').fadeToggle();
        //$('.caja-efectos').effect("explode");
        //$('.caja-efectos').toggle("explode");
        //$('.caja-efectos').toggle("blind");
        //$('.caja-efectos').toggle("slide");
        //$('.caja-efectos').toggle("drop");
        //$('.caja-efectos').toggle("fold");
        //$('.caja-efectos').toggle("puff");
        //$('.caja-efectos').toggle("scale");
        $('.caja-efectos').toggle("shake", "slow");
    });

    //tooltip
    $(document).tooltip();

    //dialog
    $('#lanzar-popup').click(function(){
        $("#popup").dialog();
    });
    //Datepicker
    $('#calendario').datepicker();

    //tabs
    $('#pestanas').tabs();

});