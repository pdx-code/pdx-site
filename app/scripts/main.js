function baseLineHeight(element) {
  var elementHeight, baseLineMeasure, baseLine, baseLineCount, adjustedHeight, elementChild;
  
  // elementChild = $(element).find("img").first();
  $(element).each(function(){
    elementHeight = $(this).outerHeight(true); 
    elementChild = $(this).find("img")
    elementChildHeight = $(this).find("img").outerHeight(true);
    baseLineMeasure = $(this).css('line-height');
    baseLine = parseInt(baseLineMeasure);
    baseLineCount = Math.ceil(elementChildHeight/baseLine);
    adjustedHeight = baseLineCount*baseLine;
    $(this).height(adjustedHeight);
    
    console.log(elementChild);
    console.log("container line height: " + baseLine);
    console.log("container element height: " + elementHeight);
    console.log("container image height: " + elementChildHeight);
    console.log("container readjusted height: " + adjustedHeight);
    console.log("-----------");
  });
}

$.event.special.debouncedresize.threshold = 150;

// debulked onresize handler
// function on_resize(c,t){onresize=function(){clearTimeout(t);t=setTimeout(c,100)};return c};

$(document).ready(function(){

  $("#menu-button").click(
    function(event){
      $("#menu").toggleClass("hidden");
      event.preventDefault();
    }
  );

});

$(window).bind('load', function(){
  
  $(window).on("debouncedresize", function(){
    // baseLineHeight("#featured-projects-wrapper");
    baseLineHeight("#featured-projects-wrapper, p.image");
  });
  baseLineHeight("#featured-projects-wrapper, p.image");

});

