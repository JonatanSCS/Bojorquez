$(window).scroll(function(){
	if($(document).scrollTop() > 163) {
    	$(".header-top").css("display", "none");
        $(".viajes-bojorquez-link").css("display", "none");
    	$("header").css("position", "fixed");
    	$("header").css("margin-top", "-30px");
    	$(".estados-section").css("position", "fixed");
    	$(".arte-section").css("position", "fixed");
    	$(".estados-section").css("margin-top", "33px");
    	$(".arte-section").css("margin-top", "33px");
        $(".principal-image").css("margin-top", "227px");
        $(".imagen-estado").css("margin-top", "227px");
        $(".municipio-info-tabla").css("margin-top", "227px")

        

  }
 });
$(window).scroll(function(){
	if($(document).scrollTop() < 163) {
        $(".header-top").css("display", "block");
        $(".viajes-bojorquez-link").css("display", "block");
        $("header").css("position", "relative");
        $("header").css("margin-top", "0");
        $(".estados-section").css("position", "absolute");
        $(".arte-section").css("position", "absolute");
        $(".estados-section").css("margin-top", "5px");
        $(".arte-section").css("margin-top", "5px");
        $(".principal-image").css("margin-top", "0px");
        $(".imagen-estado").css("margin-top", "0px");
        $(".municipio-info-tabla").css("margin-top", "0px")

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



