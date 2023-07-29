let page = 0;
var data = new Array();
data.push(["Rushit", "21ce111@charusat.edu.in", "Junagadh"]);
data.push(["Ankit", "21ce122@charusat.edu.in", "Surat"]);
data.push(["Rajbapu", "raj9747@gmail.com", "Rajkot"]);
data.push(["Krunal", "krunal@gmail.com", "Junagadh"]);
data.push(["Priyanshu", "priyanshu45@gmail.com", "Rajkot"]);
data.push(["Param", "param78@gmail.com", "Vadodara"]);
data.push(["Kush", "kush04@gmail.com", "Ahmedabad"]);

function load() {
  console.warn("loaded");
  createTable(data);
  createButtons();
}

function createTable(arr, start = 0) {
  var table = document.getElementById("tbl").getElementsByTagName("tbody")[0];
  table.innerHTML = "";
  var end = Math.min(start + 5, arr.length);
  for (var i = start; i < end; i++) {
    var row = table.insertRow(-1);

    for (const data of arr[i]) {
      var cell = row.insertCell(-1);
      cell.innerHTML = data;
    }
  }
}

function createButtons() {
  var body = document.getElementById("body");
  var div = document.createElement("div");

  // prev
  var prevBtn = document.createElement("button");
  prevBtn.onclick = function () {
    if (page > 0) {
      page--;
      var start = page * 5;
      createTable(data, start);
    }
  };
  prevBtn.innerHTML = "Prev";
  div.appendChild(prevBtn);

  // numbers
  var btns = Math.ceil(data.length / 5);
  for (var i = 0; i < btns; i++) {
    var btn = document.createElement("button");
    btn.innerHTML = i + 1;
    btn.value = i;
    btn.onclick = function () {
      NumberClick(this.value);
    };
    div.appendChild(btn);
  }

  // next
  var nextBtn = document.createElement("button");
  nextBtn.onclick = function () {
    var start = (page + 1) * 5;
    if (start < data.length) {
      page++;
      createTable(data, start);
    }
  };
  nextBtn.innerHTML = "Next";
  div.appendChild(nextBtn);

  // all buttons to div
  body.appendChild(div);
}

function NumberClick(pg) {
  page = parseInt(pg);
  createTable(data, page * 5);
}
