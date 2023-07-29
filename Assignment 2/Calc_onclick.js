function validateInput() {
  let a = parseInt(document.getElementById("value1").value);
  let b = parseInt(document.getElementById("value2").value);
  var msg1 = document.getElementById("valnum1");
  var msg2 = document.getElementById("valnum2");
  msg1.innerHTML = "";
  msg2.innerHTML = "";

  var result_1 = true;
  var result_2 = true;
  console.warn(a , b);
  if (isNaN(a)) {
    msg1.innerHTML = "*Please Enter Number 1.";
    msg1.style.color = "red";
    result_1 = false;
  }
  if (isNaN(b)) {
    msg2.innerHTML = "*Please Enter Number 2.";
    msg2.style.color = "red";
    result_2 = false;
  }
  return result_1 && result_2;
}

function Operation(operation) {
  if (!validateInput()) {
    document.getElementById("result").innerHTML = "Result: ";
    return;
  }
  let a = parseInt(document.getElementById("value1").value);
  let b = parseInt(document.getElementById("value2").value);
  var result;
  switch (operation) {
    case "add":
      result = a + b;
      break;
    case "sub":
      result = a - b;
      break;
    case "mul":
      result = a * b;
      break;
    case "div":
      result = a / b;
      break;
    default:
      return;
  }
  document.getElementById("result").innerHTML = "Result: " + result;
}
