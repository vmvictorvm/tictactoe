'use strict'

//Ensure the DOM is ready
$(function () {
  var turn = 0;
  var win = false;

  $('.1').on('click', function(){
    //alert("Squre 1 was clicked");
    var self = $(this);
    writeText(self);
    checkResult();
    if (isFull() && !(win)) {
      $('#result').html('NO WINNER');
    }
  });

  $('.2').on('click', function(){
    //alert("Squre 1 was clicked");
    var self = $(this);
    writeText(self);
    checkResult();
    if (isFull() && !(win)) {
      $('#result').html('NO WINNER');
    }
  });

  $('.3').on('click', function(){
    //alert("Squre 1 was clicked");
    var self = $(this);
    writeText(self);
    checkResult();
    if (isFull() && !(win)) {
      $('#result').html('NO WINNER');
    }
  });


  $('.4').on('click', function(){
    //alert("Squre 1 was clicked");
    var self = $(this);
    writeText(self);
    checkResult();
    if (isFull() && !(win)) {
      $('#result').html('NO WINNER');
    }
  });

  $('.5').on('click', function(){
    //alert("Squre 1 was clicked");
    var self = $(this);
    writeText(self);
    checkResult();
    if (isFull() && !(win)) {
      $('#result').html('NO WINNER');
    }
  });

  $('.6').on('click', function(){
    //alert("Squre 1 was clicked");
    var self = $(this);
    writeText(self);
    checkResult();
    if (isFull() && !(win)) {
      $('#result').html('NO WINNER');
    }
  });

  $('.7').on('click', function(){
    //alert("Squre 1 was clicked");
    var self = $(this);
    writeText(self);
    checkResult();
    if (isFull() && !(win)) {
      $('#result').html('NO WINNER');
    }
  });

  $('.8').on('click', function(){
    //alert("Squre 1 was clicked");
    var self = $(this);
    writeText(self);
    checkResult();
    if (isFull() && !(win)) {
      $('#result').html('NO WINNER');
    }
  });

  $('.9').on('click', function(){
    //alert("Squre 1 was clicked");
    var self = $(this);
    writeText(self);
    checkResult();
    if (isFull() && !(win)) {
      $('#result').html('NO WINNER');
    }
  });

  function checkResult() {
    if (($('.1').text() === $('.2').text()) && ($('.1').text() === $('.3').text())) {
      if ($('.1').text() !== '') {
        $('#result').html('The winner team is: ' + $('.1').text());
        win = true;
      }
    }
    if (($('.4').text() === $('.5').text()) && ($('.4').text() === $('.6').text())) {
      if ($('.4').text() !== '') {
      $('#result').html('The winner team is: ' + $('.4').text());
      win = true;
    }
    }
    if (($('.7').text() === $('.8').text()) && ($('.7').text() === $('.9').text())) {
      if ($('.7').text() !== '') {
      $('#result').html('The winner team is: ' + $('.7').text());
      win = true;
    }
    }
    if (($('.1').text() === $('.4').text()) && ($('.1').text() === $('.7').text())) {
      if ($('.1').text() !== '') {
      $('#result').html('The winner team is: ' + $('.1').text());
      win = true;
    }
    }

    if (($('.2').text() === $('.5').text()) && ($('.2').text() === $('.8').text())) {
      if ($('.2').text() !== '') {
      $('#result').html('The winner team is: ' + $('.2').text());
      win = true;
    }
    }
    if (($('.3').text() === $('.6').text()) && ($('.3').text() === $('.9').text())) {
      if ($('.3').text() !== '') {
      $('#result').html('The winner team is: ' + $('.3').text());
      win = true;
    }
    }
    if (($('.1').text() === $('.5').text()) && ($('.1').text() === $('.9').text())) {
      if ($('.1').text() !== '') {
      $('#result').html('The winner team is: ' + $('.1').text());
      win = true;
    }
    }
    if (($('.3').text() === $('.5').text()) && ($('.3').text() === $('.7').text())) {
      if ($('.3').text() !== '') {
      $('#result').html('The winner team is: ' + $('.3').text());
      win = true;
    }
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
