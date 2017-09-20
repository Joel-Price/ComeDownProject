//Starts floating animation

(function() {
 function loop() {
  $('.bouncer').animate({
    'top': '450'
  }, {
    duration: 1500,
    complete: function() {
      $('.bouncer').animate({
        top: 400
      }, {
        duration: 1500,
        complete: loop
      });
    }
  });

  $('<div/>').text('exiting loop').appendTo($('.results'));
}


loop();
})()



