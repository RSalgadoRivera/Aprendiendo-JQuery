$(document).ready(function () {
    var datos = $('#datos');
    var formulario = $('#formulario');
    //load
   // datos.load("https://reqres.in/");

    //Get y Post
   $.get("https://reqres.in/api/users", {page: 2}, function(response){
        response.data.forEach((element, index) => {
            datos.append("<p>"+element.first_name+" "+element.last_name+"</p>");
        });
    });

    

    formulario.submit(function (e){
        e.preventDefault();
        var usuario = {
            name: $('input[name="nombre"]').val(),
            apellido: $('input[name="apellido"]').val()
        };

        console.log(usuario);
    
        /*$.post($(this).attr("action"),usuario, function(response){
            console.log(response);
        }).done(function(){
            alert("usuario añadido correctamente");
        });*/

        $.ajax({
            type: 'POST',
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function (){
                console.log("enviando usuario ...");
            },
            success: function (response){
                console.log(response);
            },
            error: function(){
                console.log("ha ocurrido un error");
            },
            timeout: 2000
        });

        return false;
    });


});