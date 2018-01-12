$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));
  if (age<21){
    $('#under21').show();
  }
  else {
    $('#over21').show();
  }

});
