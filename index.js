var print = document.getElementById('print');
var erase = false;
var calc;

var go = function(x) {
   if (x === 'eval') {
    print.value = Math.round(evil(print.value)*100)/100;
    erase = true;
  } else {
    print.value += x;
  }
}

function evil(result) {
  return new Function('return ' + result)();
}