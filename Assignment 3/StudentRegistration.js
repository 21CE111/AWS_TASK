// setting style of every span tag
let spans = document.querySelectorAll("span");
for (const span of spans) {
  span.style.color = "red";
  span.style.fontSize = "15px";
}

// define eventlistener on submit button
let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  validateForm(e);
});

// functions to validate form
function checkFname(e) {
  let fullname = document.getElementById("fullname").value;
  let fullnameError = document.getElementById("fullnameError");
  let fullnameRegex = /^[A-Za-z ]+$/;

  if (fullname.length < 4) {
    e.preventDefault();
    fullnameError.textContent = "*Atleast 4 characters are required.";
  } else if (!fullname.match(fullnameRegex)) {
    e.preventDefault();
    fullnameError.textContent = "*Numbers are not allowed.";
  } else {
    fullnameError.textContent = "";
  }
}

function checkUserName(e) {
  let username = document.getElementById("username").value;
  let usernameError = document.getElementById("usernameError");
  let usernameRegex = /^[A-Za-z0-9_]+$/;

  if (username.length < 4) {
    e.preventDefault();
    usernameError.textContent = "*Atleast 4 characters are required.";
  } else if (!username.match(usernameRegex)) {
    e.preventDefault();
    usernameError.textContent = "*Please enter a valid username name.";
  } else {
    usernameError.textContent = "";
  }
}

function checkPass(e) {
  let psw = document.getElementById("password").value;
  let pswError = document.getElementById("pswError");
  let pswRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  if (psw.length < 4) {
    e.preventDefault();
    pswError.textContent = "*Atleast 6 characters are required.";
  } else if (!psw.match(pswRegex)) {
    e.preventDefault();
    pswError.textContent =
      "*Minimum 6 characters, at least one uppercase letter, one lowercase letter, one number and one special character required";
  } else {
    pswError.textContent = "";
  }
}

function checkCnfPass(e) {
  let Cnfpsw = document.getElementById("confirm-password").value;
  let psw = document.getElementById("password").value;
  let pswError = document.getElementById("CnfpswError");
  if (psw !== Cnfpsw) {
    e.preventDefault();
    pswError.textContent = "*Confirm password not matches with the password.";
  } else {
    pswError.textContent = "";
  }
}

function checkPhone(e) {
  let phone = document.getElementById("phone").value;
  let phoneError = document.getElementById("phoneError");
  let phoneRegex = /^[+0-9]+$/;

  if (!phone.match(phoneRegex)) {
    e.preventDefault();
    phoneError.textContent = "*Only Numbers allowed.";
  } else if (phone.length != 10) {
    e.preventDefault();
    phoneError.textContent = "*Exact 10 characters are allowed.";
  } else {
    phoneError.textContent = "";
  }
}

function checkEmail(e) {
  let email = document.getElementById("email").value;
  let emailError = document.getElementById("emailError");
  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!email.match(emailRegex)) {
    e.preventDefault();
    emailError.textContent = "*Enter a valid email.";
  } else {
    emailError.textContent = "";
  }
}

function checkGender(e) {
  let gender = document.getElementsByName("gender");
  let GenderError = document.getElementById("GenderError");
  if (!gender[0].checked && !gender[1].checked) {
    e.preventDefault();
    GenderError.textContent = "*Select your gender.";
  } else {
    GenderError.textContent = "";
  }
}

function checkState(e) {
  let state = document.getElementById("state");
  let stateError = document.getElementById("stateError");
  if (state.value === "default") {
    e.preventDefault();
    stateError.textContent = "*Select your state.";
  } else {
    stateError.textContent = "";
  }
}

function agree(e) {
  let agreement = document.getElementById("agreement");
  let agree = document.getElementById("agree");
  if (!agreement.checked) {
    e.preventDefault();
    agree.textContent = "*You must agree to the terms and conditions.";
  } else {
    agree.textContent = "";
  }
}

function validateForm(e) {
  checkFname(e);
  checkUserName(e);
  checkPass(e);
  checkCnfPass(e);
  checkPhone(e);
  checkEmail(e);
  checkGender(e);
  checkState(e);
  agree(e);
}
