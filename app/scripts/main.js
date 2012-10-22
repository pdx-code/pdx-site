$.event.special.debouncedresize.threshold = 150;

$(document).ready(function(){
  
  $("#menu-button").click(
    function(event){
      $("#menu").toggleClass("hidden");
      event.preventDefault();
    }
  );
  
  // $("#featured-projects").cycle({
  //                     // loader: 'wait',
  //   fx      : 'none', // use CSS not fx
  //   sync    : false , // slides not at same time
  //   swipe   : true  , // for mobile
  //   speed   : 1500  , // time to remove the elements w/CSS
  //   timeout : 0     , // time on slide (must be 0 or long enough for css)
  //   slides  : '> figure',
  //   log     : false
  // });
  
  $("#featured-projects").on
  (
    "cycle-before", 
    function(event, option, outgoing, incoming){
      // $(outgoingSlideEl).addClass('cycle-slide-outgoing')
    }
  );
  
}); // end document ready

$(window).bind('load', function(){
  $(window).on("debouncedresize", function(){
    baseLineHeight("div[data-picture]");
    console.log("debounce called");
  });
  baseLineHeight("div[data-picture]");
}); // end window bind

