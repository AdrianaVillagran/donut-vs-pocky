// wait for the DOM to finish loading
$(document).ready(function() {

  $('div.col-sm-4').on("click", function playTicTacToe(event) {
      $(this).text("X");
      event.preventDefault();

  });

});
