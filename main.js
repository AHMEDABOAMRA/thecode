$(document).ready(function(){
  

  $(".navbar-toggle").click(function(){
    $(".x").slideToggle(2000);


});
 $(".cy").click(function(){
    $(".b").slideToggle(1000);

    $(".cy").css("border-bottom","0px");

});
   
$(".xv").click(function(){
    $(".c").slideToggle(1000);

    $(".xv").css("border-bottom","0px");

});
$(".kl").click(function(){
    $(".d").slideToggle(1000);

    $(".kl").css("border-bottom","0px");

});

   $(window).scroll(function() {
			if ($(this).scrollTop() > 200) {
				$('.fas').fadeIn();
			} else {
				$('.fas').fadeOut();
			}
		});
});

