let str,
  array,
  cutOut,
  a,
  replaceCommas,
  newArray,
  result,
  correctedResult,
  mmm;
let formattedPart = "";
let firstPart = "";
let witDecimal = "";
let decimalSplit = "";
function format() {
  if (currencyInp.value.includes(".")) {
    mmm = currencyInp.value;
    decimalSplit = mmm.split(".");
    str = `${decimalSplit[0]}`;
  } else {
    str = currencyInp.value;
  }

  array = [...str];
  let front = array.length % 3;
  firstPart = array.splice(0, front).join("");
  for (let i = 0; array.length >= 3; i++) {
    cutOut = array.splice(-3);
    a += `|${cutOut}`;
  }
  replaceCommas = a.replace(/,/gi, "");
  newArray = replaceCommas.split("|");
  for (let j = 0; j <= newArray.length ** 2; j++) {
    if (newArray.length !== 1) {
      formattedPart += `,${newArray.pop()}`;
    }
  }
  if (decimalSplit == "") {
    result = `${firstPart + formattedPart}`;
  } else {
    result = `${firstPart + formattedPart}` + "." + `${decimalSplit[1]}`;
  }
  display();
}
function display() {
  if (result.charAt(0) == ",") {
    correctedResult = result.replace(/,/, "");
    h1.innerHTML = correctedResult;
  } else {
    h1.innerHTML = result;
  }
  a = " ";
  firstPart = "";
  decimalSplit = "";
  formattedPart = "";
}
