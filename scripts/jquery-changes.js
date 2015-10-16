$(window).scroll(function(){
	if($(document).scrollTop() > 186) {
    	$(".header-top").css("display", "none");
    	$("header").css("position", "fixed");
    	$("header").css("width","100%");
    	$("header").css("margin-top", "-30px");
    	$("nav").css("margin-top","0");
    	$(".estados-section").css("position", "fixed");
    	$(".arte-section").css("position", "fixed");
    	$(".estados-section").css("margin-top", "45px");
    	$(".arte-section").css("margin-top", "45px");
        $(".principal-image").css("margin-top", "248px");

  }
 });
$(window).scroll(function(){
	if($(document).scrollTop() < 186) {
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
    	

  }
 });


