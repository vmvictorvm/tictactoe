'use strict'

//Ensure the DOM is ready
$(function () {
  var turn = 0;
  var win = false;


  $('button').on('click', function () {
    location.reload();
  });
  $('.square').on('click', function(){
    //alert("Squre 1 was clicked");
    var self = $(this);
    writeText(self);
    checkResult();
  });



  function checkResult() {
    if ($('#1').text() !== '' && $('#1').text() === $('#2').text() && $('#1').text() === $('#3').text()) {
      $('#result').html('The winner team is: ' + $('#1').text());
      win = true;
      $('button').css('display', 'inline-block');
      $('.square').css({'pointer-events':'none',
                    'background-color':'grey'});
    }
    else if ($('#4').text() !== '' && $('#4').text() === $('#5').text() && $('#4').text() === $('#6').text()) {
      $('#result').html('The winner team is: ' + $('#4').text());
      win = true;
      $('button').css('display', 'inline-block');
      $('.square').css({'pointer-events':'none',
                    'background-color':'grey'});
    }
    else if ($('#7').text() !== '' && $('#7').text() === $('#8').text() && $('#7').text() === $('#9').text()) {
      $('#result').html('The winner team is: ' + $('#7').text());
      win = true;
      $('button').css('display', 'inline-block');
      $('.square').css({'pointer-events':'none',
                    'background-color':'grey'});
    }
    else if ($('#1').text() !== '' && $('#1').text() === $('#4').text() && $('#1').text() === $('#7').text()) {
      $('#result').html('The winner team is: ' + $('#1').text());
      win = true;
      $('button').css('display', 'inline-block');
      $('.square').css({'pointer-events':'none',
                    'background-color':'grey'});
    }

    else if ($('#2').text() !== '' && $('#2').text() === $('#5').text() && $('#2').text() === $('#8').text()) {
      $('#result').html('The winner team is: ' + $('#2').text());
      win = true;
      $('button').css('display', 'inline-block');
      $('.square').css({'pointer-events':'none',
                    'background-color':'grey'});

    }
    else if ($('#3').text() !== '' && $('#3').text() === $('#6').text() && $('#3').text() === $('#9').text()) {
      $('#result').html('The winner team is: ' + $('#3').text());
      win = true;
      $('button').css('display', 'inline-block');
      $('.square').css({'pointer-events':'none',
                    'background-color':'grey'});
    }
    else if ($('#1').text() !== '' && $('#1').text() === $('#5').text() && $('#1').text() === $('#9').text()) {
      $('#result').html('The winner team is: ' + $('#1').text());
      win = true;
      $('button').css('display', 'inline-block');
      $('.square').css({'pointer-events':'none',
                    'background-color':'grey'});
    }
    else if ($('#3').text() !== '' && $('#3').text() === $('#5').text() && $('#3').text() === $('#7').text()) {
      $('#result').html('The winner team is: ' + $('#3').text());
      win = true;
      $('button').css('display', 'inline-block');
      $('.square').css({'pointer-events':'none',
                    'background-color':'grey'});
    }
    else if (isFull() && !(win)) {
      $('#result').html('NO WINNER');
      $('button').css('display', 'inline-block');
      $('.square').css({'pointer-events':'none',
                    'background-color':'grey'});
    }
  }

  function isFull() {
    var arr = document.getElementsByTagName('td');
    for (var i = 0; i<9; i++) {
      if (($(arr[i]).text() === '')) {
        return false;
      }
    }
    return true;
  }

  function writeText(self) {
    if (self.text() === '') {
      if (turn % 2 === 0) {
        self.text('X');
      }
      else {
        self.text('O');
      }
      turn++;
    }
    else {
      alert("Nope, you can't select here");
    }
  }


});

// function writeText(self) {
//   if (self.text() === '') {
//     if (turn % 2 === 0) {
//       self.text('X');
//     }
//     else {
//       self.text('O');
//     }
//     turn++;
//   }
//   else {
//     alert("Nope, you can't select here");
//   }
// }
