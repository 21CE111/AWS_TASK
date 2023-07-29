function add() {
  var a = parseInt(document.getElementById("value1").value);
  var b = parseInt(document.getElementById("value2").value);
  var c = a + b;
  alert("Addition : " + c);
}

function sub() {
  var a = document.getElementById("value1").value;
  var b = document.getElementById("value2").value;

  alert("Subtraction : " + (a - b));
  //   document.write("Subtraction : " + (a - b));
}

function mul() {
  var a = document.getElementById("value1").value;
  var b = document.getElementById("value2").value;

  alert("Multiplication : " + a * b);
}

function div() {
  var a = document.getElementById("value1").value;
  var b = document.getElementById("value2").value;

  alert("Divison : " + a / b);
}
