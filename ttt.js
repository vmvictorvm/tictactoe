'use strict'

// Ensure the DOM is ready first!

$(function() {
  var turn = 0;

  $('.square').on('click', function() {
    // alert("A square was clicked");
    var self = $(this);

    self.data('position');

    if ( self.text() === '' ) {
      if ( turn % 2 === 0 ) {
        self.text('X');
      } else {
        self.text('O');
      }

      turn++;
    } else {
      alert("I'm sorry, Dave...");
    }
  });
});
