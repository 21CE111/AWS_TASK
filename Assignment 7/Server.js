const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
const hostname = "localhost";
const port = 3000;

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/Html/RegistrationForm.html");
});

app.post("/display", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.Pass;
  const birthDate = req.body.date;
  const gender = req.body.gender;
  const state = req.body.state;
  const range = req.body.range;
  const time = req.body.time;
  const hobbies = req.body.hobbie;
  const subjects = req.body.subject;

  res.send(`
    Name: ${name}<br>
    Email: ${email}<br>
    Password: ${password}<br>
    Birth Date: ${birthDate}<br>
    Gender: ${gender}<br>
    State: ${state}<br>
    Range: ${range}<br>
    Time: ${time}<br>
    Hobbies: ${hobbies}<br>
    Subjects: ${subjects}<br>
  `);
});

app.listen(port, function () {
  console.log(`server is running on http://${hostname}:${port}/`);
});
