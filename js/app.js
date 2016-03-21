$(document).ready(function()  {

  var clickCount = 0;
  var boxCells = $('.box');
  var gameWinner = "";

  $('.box').on('click', function(event) {
     if(  ! $(this).html() ){
       if (clickCount % 2 === 0 ) {
           $(this).html('<img src="http://orig11.deviantart.net/245a/f/2010/152/7/b/7b6e09d101e65bde3c7489da02b54c83.gif">');
           $('#current_player').text("go donut!");

       } else if (clickCount % 2 !== 0) {
           $(this).html('<img src="http://45.media.tumblr.com/c5a2487baab641bbc2d85fed16457f55/tumblr_n6ror450kc1qcf9suo1_500.gif" height="100px">');
           $('#current_player').text("go pocky!");

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
    var pocky = '<img src="http://orig11.deviantart.net/245a/f/2010/152/7/b/7b6e09d101e65bde3c7489da02b54c83.gif">';
    var donut = '<img src="http://45.media.tumblr.com/c5a2487baab641bbc2d85fed16457f55/tumblr_n6ror450kc1qcf9suo1_500.gif" height="100px">';
    if (($(boxCells.eq(0)).html() === pocky &&
         $(boxCells.eq(1)).html() === pocky &&
         $(boxCells.eq(2)).html() === pocky) ||
        ($(boxCells.eq(3)).html() === pocky &&
         $(boxCells.eq(4)).html() === pocky &&
         $(boxCells.eq(5)).html() === pocky) ||
        ($(boxCells.eq(6)).html() === pocky &&
         $(boxCells.eq(7)).html() === pocky &&
         $(boxCells.eq(8)).html() === pocky) ||
        ($(boxCells.eq(0)).html() === pocky &&
         $(boxCells.eq(3)).html() === pocky &&
         $(boxCells.eq(6)).html() === pocky) ||
        ($(boxCells.eq(1)).html() === pocky &&
         $(boxCells.eq(4)).html() === pocky &&
         $(boxCells.eq(7)).html() === pocky) ||
        ($(boxCells.eq(2)).html() === pocky &&
         $(boxCells.eq(5)).html() === pocky &&
         $(boxCells.eq(8)).html() === pocky) ||
        ($(boxCells.eq(2)).html() === pocky &&
         $(boxCells.eq(4)).html() === pocky &&
         $(boxCells.eq(6)).html() === pocky) ||
         ($(boxCells.eq(0)).html() === pocky &&
          $(boxCells.eq(4)).html() === pocky &&
          $(boxCells.eq(8)).html() === pocky) ) {
           $('#board').html('<img src="https://media.giphy.com/media/3xz2BJFDG9yRxvmAta/giphy.gif" height="480px">');
           $('#current_player').text("Pocky kills");
         }else if(($(boxCells.eq(0)).html() === donut &&
                  $(boxCells.eq(1)).html() === donut &&
                  $(boxCells.eq(2)).html() === donut) ||
                 ($(boxCells.eq(3)).html() === donut &&
                  $(boxCells.eq(4)).html() === donut &&
                  $(boxCells.eq(5)).html() === donut) ||
                 ($(boxCells.eq(6)).html() === donut &&
                  $(boxCells.eq(7)).html() === donut &&
                  $(boxCells.eq(8)).html() === donut) ||
                 ($(boxCells.eq(0)).html() === donut &&
                  $(boxCells.eq(3)).html() === donut &&
                  $(boxCells.eq(6)).html() === donut) ||
                 ($(boxCells.eq(1)).html() === donut &&
                  $(boxCells.eq(4)).html() === donut &&
                  $(boxCells.eq(7)).html() === donut) ||
                 ($(boxCells.eq(2)).html() === donut &&
                  $(boxCells.eq(5)).html() === donut &&
                  $(boxCells.eq(8)).html() === donut) ||
                 ($(boxCells.eq(2)).html() === donut &&
                  $(boxCells.eq(4)).html() === donut &&
                  $(boxCells.eq(6)).html() === donut) ||
                 ($(boxCells.eq(0)).html() === donut &&
                  $(boxCells.eq(4)).html() === donut &&
                  $(boxCells.eq(8)).html() === donut) ) {
                    $('#board').html('<img src="https://media.giphy.com/media/COZk7m43C4sQo/giphy.gif">');
                    $('#current_player').text("So you like donuts, eh?");
                  } else if (clickCount === 9) {
                    alert("Game is a draw. Click reset to start again.");
                  }
  }



});
