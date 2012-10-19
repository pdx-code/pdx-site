$(document).ready(function(){

  // esc key toggles the baseline debug background 
  $(document).keyup(function(event){
    // console.log(event.keyCode);
    if(event.keyCode == 27) {
      $("body").toggleClass("debug-baseline");
    }
    // if(event.keyCode == 80) {
    //   $('.cycle-slideshow').cycle('pause'); 
    // }
  });
  
  $("#next").click(function(){
    $('#featured-projects').cycle('next'); 
    return false;
  });
  var projects = $("#featured-projects")
  
});

