$.event.special.debouncedresize.threshold = 150;

$(document).ready(function(){
  $("#menu-button").click(
    function(event){
      $("#menu").toggleClass("hidden");
      event.preventDefault();
    }
  );
  
  if(Modernizr.csstransforms3d) {
    $("#featured-projects").addClass("three-d");
  }

  $.fn.cycle.transitions.animatedBanner = {
    before: function(opts, curr, next, fwd) {
      opts.cssBefore = {display: 'block'};
    }
  }
  
  $("#featured-projects").cycle({
    fx: 'animatedBanner',
    delay: 3000,
    sync: true,
    swipe: true,
    speed: 2050,
    timeout: 0,
    slides: '> figure',
    loader: 'wait',
    'pause-on-hover': true
  });

  $("#featured-projects").on('cycle-after', function(){
    var currSlide = $('.cycle-slide-active');
    
    currSlide.find('img').removeClass('imgExit');

    $('.lower-third').removeClass('hide');
    $('.lower-third').addClass('show');
    $('.project-title').addClass('titleIn');
  });
  
  $("#featured-projects").on('cycle-before', function(){
    var currSlide = $('.cycle-slide-active');
    
    currSlide.find('img').addClass('imgExit');
    
    $('.project-title').removeClass('titleIn');
    $('.lower-third').removeClass('show');
    $('.lower-third').addClass('hide');
  });

  $('#featured-projects').on('cycle-bootstrap', function(){
    console.log('This cycle has been initialized');
  })
  
}); // end document ready

$(window).bind('load', function(){
  $(window).on("debouncedresize", function(){
    baseLineHeight("div[data-picture]");
  });
  baseLineHeight("div[data-picture]");
}); // end window bind

