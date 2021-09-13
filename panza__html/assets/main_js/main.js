$('.single-item').slick({
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  (function($, document) {
    
    let height = -1;

  $('.tab__content').each(function() {
    height = height > $(this).outerHeight() ? height : $(this).outerHeight();
       $(this).css('position', 'absolute');
  });
  $('[data-tabs]').css('min-height', height + 40 + 'px');
 
}(jQuery, document));

$(window).on("scroll", function() {
  if($(window).scrollTop() > 510) {
      $("#top__header").addClass("active");
  } else {
     $("#top__header").removeClass("active");
  }
});