/*
// wait for the DOM to finish loading
$(document).ready(function() {




  var turn = 1;
  $('.box').on('click', function playTicTacToe(event){
        if ($(this).text() !== 'X' && $(this).text() !== 'O') {
          if (turn === 1) {
            $(this).text('X');
            $('#current_player').text("Let's go, O!");
            turn = 2;
          } else if (turn === 2) {
            $(this).text('O');
            $('#current_player').text("You're turn, X!");
            turn = 1;
            }
        }
      isWinner();
  });





*/


$(document).ready(function()  {

  var clickCount = 0;
  var boxCells = $('.box');
  var gameWinner = "";

  $('.box').on('click', function(event) {
   if(  ! $(this).text() ){
     if (clickCount % 2 === 0 ) {
         $(this).text('X');
         $('#current_player').text("Let's go, O!");

     } else if (clickCount % 2 !== 0) {
         $(this).text('O');
         $('#current_player').text("You're turn, X!");

       }
   clickCount++;
   checkForWinner();
   }

  });

  $('button').on('click', function resetBoard(event) {
    window.location.reload();
    clickCount = 0;
  });

  function checkForWinner() {
    if (($(boxCells.eq(0)).text() === 'X' &&
         $(boxCells.eq(1)).text() === 'X' &&
         $(boxCells.eq(2)).text() === 'X') ||
        ($(boxCells.eq(3)).text() === 'X' &&
         $(boxCells.eq(4)).text() === 'X' &&
         $(boxCells.eq(5)).text() === 'X') ||
        ($(boxCells.eq(6)).text() === 'X' &&
         $(boxCells.eq(7)).text() === 'X' &&
         $(boxCells.eq(8)).text() === 'X') ||
        ($(boxCells.eq(0)).text() === 'X' &&
         $(boxCells.eq(3)).text() === 'X' &&
         $(boxCells.eq(6)).text() === 'X') ||
        ($(boxCells.eq(1)).text() === 'X' &&
         $(boxCells.eq(4)).text() === 'X' &&
         $(boxCells.eq(7)).text() === 'X') ||
        ($(boxCells.eq(2)).text() === 'X' &&
         $(boxCells.eq(5)).text() === 'X' &&
         $(boxCells.eq(8)).text() === 'X') ||
        ($(boxCells.eq(2)).text() === 'X' &&
         $(boxCells.eq(4)).text() === 'X' &&
         $(boxCells.eq(6)).text() === 'X') ||
         ($(boxCells.eq(0)).text() === 'X' &&
          $(boxCells.eq(4)).text() === 'X' &&
          $(boxCells.eq(8)).text() === 'X') ) {
           gameWinner = "Player X";
           isWinner();
         }else if(($(boxCells.eq(0)).text() === 'O' &&
                  $(boxCells.eq(1)).text() === 'O' &&
                  $(boxCells.eq(2)).text() === 'O') ||
                 ($(boxCells.eq(3)).text() === 'O' &&
                  $(boxCells.eq(4)).text() === 'O' &&
                  $(boxCells.eq(5)).text() === 'O') ||
                 ($(boxCells.eq(6)).text() === 'O' &&
                  $(boxCells.eq(7)).text() === 'O' &&
                  $(boxCells.eq(8)).text() === 'O') ||
                 ($(boxCells.eq(0)).text() === 'O' &&
                  $(boxCells.eq(3)).text() === 'O' &&
                  $(boxCells.eq(6)).text() === 'O') ||
                 ($(boxCells.eq(1)).text() === 'O' &&
                  $(boxCells.eq(4)).text() === 'O' &&
                  $(boxCells.eq(7)).text() === 'O') ||
                 ($(boxCells.eq(2)).text() === 'O' &&
                  $(boxCells.eq(5)).text() === 'O' &&
                  $(boxCells.eq(8)).text() === 'O') ||
                 ($(boxCells.eq(2)).text() === 'O' &&
                  $(boxCells.eq(4)).text() === 'O' &&
                  $(boxCells.eq(6)).text() === 'O') ||
                 ($(boxCells.eq(0)).text() === 'O' &&
                  $(boxCells.eq(4)).text() === 'O' &&
                  $(boxCells.eq(8)).text() === 'O') ) {
                    gameWinner = "Player 0";
                    isWinner();
                  }
  }

  function isWinner() {
      alert(gameWinner + " wins!");
      $('#current_player').text("");
      window.location.reload();
  }



});
