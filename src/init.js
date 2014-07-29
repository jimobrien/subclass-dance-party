$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    // var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    // var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var top = Math.random() * (500 - 350)  + 350;
    var left = Math.random() * 1000;

    var dancer = new BlinkyDancer(
      top,
       left,
      Math.random() * window.innerWidth
    );

    dancers.push(dancer)
    
    $('body').append(dancer.$node);
  });

  $(".alignDancersButton").on("click", function(event) {
    for (var i = 0; i < dancers.length; i++) {
      dancers[i].setPosition(500,500);
    }
  });

$(".dancer").mouseover(function() {
    var id = $(this).data('id');
    console.log('asd',id);
    $(id).fadeIn();
  });
  
});

