



$(window).scroll(function(){
	if($(document).scrollTop() > 100) {
      $(".header-banner").css("display", "none");
      $(".header-nav").css("position", "fixed");
      $(".header-nav").css("z-index", "1000");
      $(".header-nav").css("margin-left", "-30%");
      $(".header-nav").css("margin-top", "-30px");
      $(".header-nav").css("opacity", ".9");
      $(".estados-section-fixed").css("margin-top", "-40px");
      $(".arte-cultura-section-fixed").css("margin-top", "-40px");
      $(".principal-image").css("margin-top","230px")


  }
 });
$(window).scroll(function(){
	if($(document).scrollTop() < 100) {
      $(".header-banner").css("display", "block");
      $(".header-nav").css("position", "relative");
      $(".header-nav").css("margin-left", "0");
      $(".header-nav").css("margin-top", "0");
      $(".header-nav").css("opacity", "1");
      $(".estados-section-fixed").css("margin-top", "-240px");
      $(".arte-cultura-section-fixed").css("margin-top", "-240px");
       $(".principal-image").css("margin-top","0")

  }
 });