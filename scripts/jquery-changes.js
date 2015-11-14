$(window).scroll(function(){
	if($(document).scrollTop() > 100) {
        $('header').css('position', 'fixed');
        $('header').css('margin-top', '-30px');
        $('.banner').css('display', 'none');
    	$('.guia-turistica-logo').css('display', 'none');
        $('.viajes-logo').css('display', 'none');
        $('.principal-image').css('margin-top', '145px');
        $('.nav-ul').css('margin-top', '-3px');
        $('.arte-section').css('margin-top', '19px');
        $('.estados-section').css('margin-top', '19px');
        $('.arte-section').css('position', 'fixed');
        $('.estados-section').css('position', 'fixed');
        $('.imagen-estado').css('margin-top', '145px');
        $('.municipio-info-tabla').css('margin-top', '145px');
  }
 });
$(window).scroll(function(){
	if($(document).scrollTop() < 100) {
        $('header').css('position', 'relative');
        $('header').css('margin-top', '0');
        $('.banner').css('display', 'inline-block');
        $('.guia-turistica-logo').css('display', 'inline-block');
        $('.viajes-logo').css('display', 'inline-block');
        $('.principal-image').css('margin-top', '0');
        $('.nav-ul').css('margin-top', '3px');
        $('.arte-section').css('margin-top', '2px');
        $('.estados-section').css('margin-top', '2px');
        $('.arte-section').css('position', 'absolute');
        $('.estados-section').css('position', 'absolute');
        $('.imagen-estado').css('margin-top', '0');
        $('.municipio-info-tabla').css('margin-top', '0');

  }
 });





var municipio;
$(".municipios-tlaxcala").click(function(){
    municipio = $(this).text();
    $.cookie("municipio-nombre", municipio); 

});

$(document).ready(function(){
        $(".titulo-municipio").text($.cookie("municipio-nombre"));
        
});

$(".municipios-regreso").click(function(){
    window.history.back();
});



