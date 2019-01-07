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
  
     
  });
  
  $(function() {$('body').on('click', 'a.scrollable', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top},1500,'easeInOutExpo');
    event.preventDefault();
    });
  });
  
  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
    $(".navbar-collapse").collapse('hide');});
  
  // Hides the scroll up button at top.
  $(window).scroll(function() {
  
      if ($(this).scrollTop()>0)
       {
          $('.scroll-top').fadeIn();
       }
      else
       {
        $('.scroll-top').fadeOut();
       }
   });
      