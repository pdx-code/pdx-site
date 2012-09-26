function baseLineHeight(element) {
  var elementHeight, baseLineMeasure, baseLine, baseLineCount, adjustedHeight, elementChild;
  
  $(element).each(function(){
    elementHeight = $(this).outerHeight(true); 
    elementChild = $(this).find("img")
    elementChildHeight = $(this).find("img").outerHeight(true);
    baseLineMeasure = $(this).css('line-height');
    baseLine = parseInt(baseLineMeasure);
    baseLineCount = Math.ceil(elementChildHeight/baseLine);
    adjustedHeight = baseLineCount*baseLine;
    $(this).height(adjustedHeight);
  });
}

$.event.special.debouncedresize.threshold = 150;

$(document).ready(function(){

  $("#menu-button").click(
    function(event){
      $("#menu").toggleClass("hidden");
      event.preventDefault();
    }
  );

  $(document).keyup(function(event){
    console.log(event.keyCode);
    if(event.keyCode == 27) {
      $("body").toggleClass("debug-baseline");
    }
  });

});

$(window).bind('load', function(){
  
  $(window).on("debouncedresize", function(){
    // baseLineHeight("#featured-projects-wrapper");
    baseLineHeight("#featured-projects-wrapper, p.image");
  });
  baseLineHeight("#featured-projects-wrapper, p.image");

});

