window.onload = function () {
  //Build an array containing Customer records.
  var customers = new Array();
  customers.push([
    "21ce111",
    "Rushit",
    "21ce111@charusat.edu.in",
    "Junagadh",
    1234567890,
  ]);
  customers.push([
    "21ce122",
    "Ankit",
    "21ce122@charusat.edu.in",
    "Surat",
    1234567890,
  ]);
  customers.push([
    "21ce888",
    "Rajbapu",
    "raj9747@gmail.com",
    "Rajkot",
    1234567890,
  ]);

  // customers.unshift(["Martin", "Russia"]); //adds a new element to an array (at the beginning)
  console.log(customers);

  // customers.pop(); //method removes the last array element
  //customers.shift();//removes the first element from an array:

  //Add the data rows.
  for (var i = 0; i < customers.length; i++) {
    AddRow(
      customers[i][0],
      customers[i][1],
      customers[i][2],
      customers[i][3],
      customers[i][4]
    );
  }
};

function Add() {
  var name = document.getElementById("name");
  var city = document.getElementById("city");
  var email = document.getElementById("email");
  var id = document.getElementById("id");
  var phone = document.getElementById("phone");
  if (!name.value || !email.value || !city.value || !id.value || !phone.value) {
    return;
  }
  AddRow(id.value, name.value, email.value, city.value, phone.value);
  name.value = "";
  city.value = "";
  email.value = "";
  id.value = "";
  phone.value = "";
}

function Remove(button) {
  console.log(button);
  //Determine the reference of the Row using the Button.
  var row = button.parentNode.parentNode;
  console.log(row);
  var name = row.getElementsByTagName("TD")[0].innerHTML;
  if (confirm("Do you want to delete: " + name)) {
    //Get the reference of the Table.
    var table = document.getElementById("tblCustomers");

    //Delete the Table row using it's Index.
    table.deleteRow(row.rowIndex);
  }
}

function Edit(button) {
  console.log(button);

  var row = button.parentNode.parentNode;
  console.log(row);

  var id = prompt("Enter the id :");
  var name = prompt("Enter the name :");
  var email = prompt("Enter the email :");
  var city = prompt("Enter the city :");
  var phone = prompt("Enter the phone :");
  if (!name || !email || !city || !id || !phone) {
    return;
  }
  row.getElementsByTagName("td")[0].innerHTML = id;
  row.getElementsByTagName("td")[1].innerHTML = name;
  row.getElementsByTagName("td")[2].innerHTML = email;
  row.getElementsByTagName("td")[3].innerHTML = city;
  row.getElementsByTagName("td")[4].innerHTML = phone;
}

function AddRow(id, name, email, city, phone) {
  //Get the reference of the Table's TBODY element.
  var tBody = document
    .getElementById("tblCustomers")
    .getElementsByTagName("TBODY")[0];

  console.log(tBody);

  //Add Row.
  row = tBody.insertRow(-1);
  console.log(row);

  var cell = row.insertCell(-1);
  cell.innerHTML = id;

  cell = row.insertCell(-1);
  cell.innerHTML = name;

  cell = row.insertCell(-1);
  cell.innerHTML = email;

  cell = row.insertCell(-1);
  cell.innerHTML = city;

  cell = row.insertCell(-1);
  cell.innerHTML = phone;
  
  //Add Button cell.
  cell = row.insertCell(-1);
  var btnRemove = document.createElement("INPUT");
  btnRemove.type = "button";
  btnRemove.value = "Remove";
  btnRemove.setAttribute("onclick", "Remove(this);");
  cell.appendChild(btnRemove);

  cell = row.insertCell(-1);
  var btnEdit = document.createElement("INPUT");
  btnEdit.type = "button";
  btnEdit.value = "Edit";
  btnEdit.setAttribute("onclick", "Edit(this);");

  console.log(btnEdit);
  cell.appendChild(btnEdit);
  console.warn(btnEdit.parentNode);
}
