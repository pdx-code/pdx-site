$(document).ready(function(){
  
  $('#main .button-group:first').prepend(
    "<a id='next' class='button large' href=''>Next Slide</a>"
  );

  $("#next").click(function(){
    $('#featured-projects').cycle('next'); 
    return false;
  });
  
});

