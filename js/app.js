// wait for the DOM to finish loading
$(document).ready(function() {


  var turn = 1;
  $('div.col-sm-4.box').on('click', function playTicTacToe(event){
      for(var i=0; i<9; i++) {
        if ($(this).text() !== 'X' && $(this).text() !== 'O') {
          if (turn === 1) {
            $(this).text('X');
            turn = 2;
          } else if (turn === 2) {
            $(this).text('O');
            turn = 1;
            }
        }
      }

  });


});
