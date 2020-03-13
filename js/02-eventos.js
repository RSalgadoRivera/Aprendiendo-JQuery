$(document).ready(()=>{

//mouseOver y mouseOut
var caja = $("#caja");

/*caja.mouseover(() =>{
    cambiarColorCaja("red");
});

caja.mouseout(() =>{
    cambiarColorCaja("yellow");
});*/

//Hover

caja.hover(cambiaRojo, cambiaVerde);

function cambiaRojo() {
    cambiarColorCaja("red");
}

function cambiaVerde() {
    cambiarColorCaja("green");
}

function cambiarColorCaja(color) {
    caja.css("background", color);
}

//Click, doble click

caja.click(function () {
    $(this).css("background", "blue")
    .css("color","white");
});

caja.dblclick(function () {
    $(this).css("background", "pink")
    .css("color","yellow");
});

//Focus y blur

var nombre = $("#nombre"); 
var datos = $('#datos');
nombre.focus(function(){
    $(this).css("border", "2px solid green");
});

nombre.blur(function(){
    $(this).css("border", "1px solid #ccc");
    datos.text($(this).val()).show();
});

//mousedown y mouseup

datos.mousedown(function(){
    $(this).css("border-color", "gray");
});

datos.mouseup(function(){
    $(this).css("border-color", "black");
});

//mousemove
var sigueme=$("#sigueme");
$(document).mousemove(function(){
    //console.log("X: " + event.clientX + " Y: " + event.clientY);
    $('body').css("cursor", "none");
    sigueme
    .css("left", event.clientX)
    .css("top", event.clientY);
});

});