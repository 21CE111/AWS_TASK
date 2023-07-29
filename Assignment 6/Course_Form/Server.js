const express = require("express");
const bodyParser = require("body-parser");

const hostname = "localhost";
const port = 3000;
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/form.html");
});

app.post("/course", function (req, res) {
  var code = req.body.code;
  var name = req.body.name;
  var institute = req.body.institute;
  var department = req.body.department;

  res.send(
    `<h1>Course Details</h1>
     <h4> Course Code: ${code}</h4>
     <h4> Course name: ${name}</h4>
     <h4> Institute  : ${institute}</h4>
     <h4> Department : ${department}</h4>`
  );
});

app.listen(port, function () {
  console.log(`server is running on http://${hostname}:${port}/`);
});
