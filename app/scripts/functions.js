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
} // end baseLineHeight
