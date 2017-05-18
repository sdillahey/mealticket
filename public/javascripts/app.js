//dropdowns
$(document).ready(function(){

  //initializes dropdown b/c it's being created dynamically
  $('.dropdown-button').dropdown({
    inDuration: 400,
    outDuration: 300,
    constrainWidth: true,
    hover: true,
    gutter: 0,
    belowOrigin: true, // Displays dropdown below the button
    alignment: 'left', // Displays dropdown with edge aligned to the left of button
    stopPropagation: false // Stops event propagation
    }
  );

  $('.button-collapse').sideNav();

  $('.slider').slider();//displays slider


});
