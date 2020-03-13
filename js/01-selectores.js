$(document).ready(function () {
    //selector de id
    $("#rojo")
        .css("background", "red")
        .css("color", "white");

    $("#amarillo")
        .css("background", "yellow")
        .css("color", "green");

    $('#verde')
        .css('background', 'green')
        .css('color', 'white');

    //Selector de clase

    var mi_clase = $('.zebra').css("padding", "5px");

    $('.sin_borde').click(function (){
        console.log("click");
        $(this).addClass('zebra');
    });
    
    //selectores de etiqueta

    var parrafos = $('p').css("cursor", "pointer");

    parrafos.click(function(){
        var elemento = $(this);
        if (!elemento.hasClass('grande')) {
            elemento.addClass('grande');
        }else{
            elemento.removeClass('grande');
        }
        
    });

    //selectores de atributos
    $('[title="Google"]').css('background','#ccc');
    $('[title="Facebook"]').css('background','blue').css('color', 'white');

    //otros
    //$('p,a').addClass('margen_superior');

    var busqueda = $("#caja .resaltado").parent().parent().parent().find('[title="Google"]');

    console.log(busqueda);

});