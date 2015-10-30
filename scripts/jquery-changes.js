$(window).scroll(function(){
	if($(document).scrollTop() > 132) {
    	$(".header-top").css("display", "none");
    	$("header").css("position", "fixed");
    	$("header").css("width","100%");
    	$("header").css("margin-top", "-30px");
    	$("nav").css("margin-top","0");
    	$(".estados-section").css("position", "fixed");
    	$(".arte-section").css("position", "fixed");
    	$(".estados-section").css("margin-top", "55px");
    	$(".arte-section").css("margin-top", "55px");
        $(".principal-image").css("margin-top", "190px");
        $(".imagen-estado").css("margin-top", "190px");

        

  }
 });
$(window).scroll(function(){
	if($(document).scrollTop() < 132) {
		$(".header-top").css("display", "block");
   		$("header").css("position", "relative");
    	$("header").css("width","100%");
    	$("nav").css("margin-top","1%");
    	$(".logo-section").css("margin-top", "20px");
    	$(".estados-section").css("position", "absolute");
    	$(".arte-section").css("position", "absolute");
    	$(".estados-section").css("margin-top", "15px");
    	$(".arte-section").css("margin-top", "15px");
        $(".principal-image").css("margin-top", "0");
        $(".imagen-estado").css("margin-top", "0");

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



