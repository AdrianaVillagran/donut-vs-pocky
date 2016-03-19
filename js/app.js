// wait for the DOM to finish loading
$(document).ready(function() {

  var ticTacToeBoard = $('.box');


  var turn = 1;
  $('div.col-sm-4.box').on('click', function playTicTacToe(event){
      for(var i=0; i<9; i++) {
        if ($(this).text() !== 'X' && $(this).text() !== 'O') {
          if (turn === 1) {
            $(this).text('X');
            $('#current_player').text("Let's go, O!");
            turn = 2;
          } else if (turn === 2) {
            $(this).text('O');
            $('#current_player').text("You're turn, X!");
            turn = 1;
            console.log(ticTacToeBoard.eq(0));
            }
        }
      }

  });

  $('button').on('click', function resetBoard(event) {
    $('.box').text('');
    turn = 1;
  });




});
