let data;

// regex pattern
namereg = /^[A-Za-z]{2,80}$/;
// console.log(namereg.test("FeranmiODEDAIRO"));
userNreg = /^[A-Za-z0-9]{6,}$/;
// console.log(userNreg.test("Feranmi18")); // no speacial characters allowed
emailreg = /^[a-zA-Z0-9#$%^&.*]+@[a-z]+([.][a-z]{2,3})$/;
// console.log(emailreg.test("getjommy@gmail.com"));
pswrdreg = /^[a-zA-Z0-9#$%@^&.*]{8,}/;
// console.log(pswrdreg.test("Feranmi@1"));

// saveeeeeeeeeeee

// usernamereg = /^[A-Za-z0-9@#$%^&\*]{6,12}$/;
// usernamereg = /^(?=.*[A-Z])(?.=[a-z])[0-9][@#$%^&\*]{6,12}$/;
// // usernamereg = /^[A-Za-z0-9@#$%^&\*]{6,12}$/;
// console.log(usernamereg.test("Jomiloju"));

function submitF() {
  let lastN = document.getElementById("last").value;
  let surN = document.getElementById("surn").value;
  let userN = document.getElementById("user").value;
  let email = document.getElementById("email").value;
  let pswrd = document.getElementById("pswrd").value;
  let cpswrd = document.getElementById("cpswrd").value;
  let number = document.getElementById("pnum").value;
  if (lastN && surN && userN && email && pswrd && cpswrd && number !== "") {
    validateF();
  } else {
    alert("All fields are required");
  }
}

function validateF() {
  if (namereg.test(last.value && surn.value)) {
    lastV.innerHTML = `<strong class='text-dark'>VALID</strong>`;
    surnV.innerHTML = `<strong class='text-dark'>VALID</strong>`;
  } else {
    lastV.innerHTML = `<strong class='text-danger'>INVALID {no special characters allowed}</strong>`;
    surnV.innerHTML = `<strong class='text-danger'>INVALID {no special characters allowed}</strong>`;
  }
  if (userNreg.test(user.value)) {
    userV.innerHTML = `<strong class='text-dark'>VALID</strong>`;
  } else {
    userV.innerHTML = `<strong class='text-danger'>INVALID {Must not contain special characters}</strong>`;
  }
  if (emailreg.test(email.value)) {
    emailV.innerHTML = `<strong class='text-dark'>VALID</strong>`;
  } else {
    emailV.innerHTML = `<strong class='text-danger'>INVALID {Incorrect Format}</strong>`;
  }
  if (pswrd.value === cpswrd.value) {
    validateP();
  } else {
    cpswrdV.innerHTML = `<strong class='text-danger'>PASSWORDS DON'T MATCH</strong>`;
  } // correct here
}

function validateP() {
  if (pswrdreg.test(pswrd.value)) {
    pswrdV.innerHTML = `<strong class='text-dark'>VALID</strong>`;
  } else {
    pswrdV.innerHTML = `<strong class='text-danger'>INVALID{Minimum of 8 characters, Numbers, Capital, Small Letters and special characters must be included}</strong>`;
  }
}

function check() {
  let number = document.getElementById("pnum").value;
  data = {
    nigerian: { code: "+234", regex: "/^[0-9]{10,11}$/" },
    ghanian: { code: "+233", regex: "/^[0-9]{9}$/" },
    us: { code: "+1", regex: "/^[2-9]{1}[0-9]{2}[0-9]{7}$/" },
    uk: { code: "+44", regex: "/^[0-9]{4}[0-9]{6}$/" },
  };
  let regex = eval(data[country.value].regex);
  // let evals = regex.test("08055484696");
  let get = regex.test(number);
  let evals = eval(get);
  console.log(regex, get, evals);
  if (evals) {
    pnumV.innerHTML = `<strong class='text-dark'>VALID + ${country.value} NUMBER</strong>`;
  } else {
    pnumV.innerHTML = `<strong class='text-danger'>INVALID + ${country.value} NUMBER</strong>`;
  }
}
