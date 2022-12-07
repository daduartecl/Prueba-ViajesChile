$(function () {
    //Tooltip asociado a RRSS
    $('[data-bs-toggle="tooltip"]').tooltip ();

    //Evento asociado al botón enviar    
    $('#enviar').click(function() {
        alert("El formulario fue enviado correctamente");
    });

    //Evento asociado a card
    $(".card-title").click(function() {
        $(".card-text").toggle();
    });
});

$(document).scroll(function() {
    const y= $("html").scrollTop();

    y > 300 ? $("nav").addClass("nav-black"): $("nav").removeClass("nav-black")
});