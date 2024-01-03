// VARIABLE DECLARATION
let myCup = 'Water';
let x = 10;
let y = 4;
const NEW = 'ban';
// myCup='pap'
// document.getElementById('demo').innerHTML = to_celcius(32);
//////////////////////////////////////////////////////////////

// DATA TYPES
let man = {
  first_name: 'Emmanuel',
  last_name: 'Aed',
  age: 10,
  eye: 2,
  fullname: function () {
    return this.first_name + ' ' + this.last_name;
  },
};
// document.getElementById('demo2').innerHTML = man.fullname();
let cupDatas = ['water', 'wine', 'pap'];
console.log(cupDatas[1]);
// document.getElementById('demo').innerHTML = "I am"+ " " + person.firstName +" " + person.lastName+" " + "and i have a" +" " + person.hairColor+ "hair color"
function to_celcius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32) + 'degree';
}
function bgcolor() {
  document.getElementById('demo3').innerHTML = 'you just copied a text';
}
////////////////////////////////////////////////////////////////

//SETTIN AND gETTINg ELEMENTS
function change() {
  let val = document.getElementById('inp').value;
  paste.value = val;
  document.getElementById('inp').value = ' ';
}
function btn(val = 0) {
  h1.innerHTML += val;
}
let name = 'teslim';
let message = 'How are you';
console.log(`${name}  ${message}`);
///////////////////////////////////////////////////////////////

//OPERATORS
//gETTINg VALUES FROM INPUT AND PERFORMIN OPERATION
function sum() {
  let a = input1.value;
  let b = input2.value;
  let c = input3.value;
  if (c === '+') {
    let total = Number(a) + Number(b);
    h_one.innerHTML = total;
  } else if (c === '*') {
    let total = Number(a) * Number(b);
    h_one.innerHTML = total;
  } else if (c === '-') {
    let total = Number(a) - Number(b);
    h_one.innerHTML = total;
  } else if (c === '/') {
    let total = Number(a) / Number(b);
    h_one.innerHTML = total;
  } else {
    h_one.innerHTML = 'invalid';
  }
}
let p = 10;
let g = 20;
if (p > 20) {
  console.log('p is >');
} else if (p < 20) {
  console.log('p is <');
} else {
  console.log('none');
}
//////////////////////////////////////////////////

function display(value) {
  if (h1.innerHTML == 0) {
    document.getElementById('h1').innerHTML = ' ';
  }
  document.getElementById('h1').innerHTML += value;
}
//////////////////////////////////////////////////

//STRINg METODS INVOLVINg REgULAR EXPRESSIONS
let str = 'TeSLit';
let vip = 'S,tea,mi,ng';
let aaaa = 10000;
// console.log(aaaa.toString);
let cut = str.slice(0, -1);
// let cut = str.lastIndexOf('t')
// console.log(str.replace(/l/gi,'k'));//from to
// console.log(cut);//from to
// (str.toLowerCase)
// console.log(str.includes('l'));
let spp = vip.split(',');
// console.log(spp.includes('tea'));
// console.log(str.search(/T/gi));//returns indeex of search
// INCLUDES charAt(index) indexof...
//when it sends sex/gi  change sex to gender change shit to sh**
function textChange() {
  textInput.value = textInput.value.replace(/sex/gi, 'gender');
  textInput.value = textInput.value.replace(/shit/gi, 'sh**');
}
let aav = '4595';
// console.log(aav.padStart(8,'*'));
// console.log(aav.repeat(3));
/////////////////////////////////////////////////////////////////

//ARRAY AND ARRAY METODS
let array = ['teslim', 'jomiloju', 'eniola', 'samuel', 'emmanuel', 'samuel'];
array[3] = 'PRECIOUS';
// array.pop()//remove element from the end
// array.unshift('abimbola')//adds to the beginning of the array
// // array.push('bimbola')//add to end of array
// console.log(array.join(','))//convert array to string
console.log(array);
console.log(array.splice(0, 1));
console.log(array);
// array.length//number of elements in the array
// console.log(array);

////////////////////////////////
let newArray = [];

function push() {
  let input = '';
  input = arrayInp.value;
  words = newArray.push(input);
  console.log(newArray);
  arrayInp.value = '';
  arrayH1.innerHTML = newArray;
}
/////////////////////////////////////////////////////////////////

// FOR LOOP
for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
}
// for (let i = 0; i<array.length; i++){
//     displayD.innerHTML += `<li>${array[i]}</li>`
// }
// for (let i=1; i<=12; i++){
//     let result  = i * 2
//     multiplicationResultB.innerHTML +=`<li>2 * ${i}=${result}</li>`
// }

function showTable() {
  let startingPoint = startNumber.value;
  let endPoint = endNumber.value;
  for (let i = startingPoint; i <= endPoint; i++) {
    for (let j = 0; j < 12; j++) {
      let result = i * (j + 1);
      multiplicationResult.innerHTML += `${i} *${j + 1}= ${result} <br>`;
    }
    multiplicationResult.innerHTML += `<p class="px-5"></p>`;
  }
}

//ADD AND DELETE ELEMENTS FROM AN ARRAY--------TDLISTYY//
let names = [];
let elementIndex;
function add() {
  names.push(nameInp.value);
  nameInp.value = '';
  pushNames();
}
function pushNames() {
  namesH1.innerHTML = '';
  for (let i = 0; i < names.length; i++) {
    namesH1.innerHTML += `<h1>${names[i]}<button onclick="del(${i})">Delete</button></h1>`;
  }
  console.log(names);
}
function del(index) {
  console.log(index);
  names.splice(index, 1);
  pushNames();
}
//////////////////////////////////////////////////////

//USINg CSS STYLES IN JS
function changeColor() {
  ptag.style.color = txtCol.value;
  ptag.style.backgroundColor = backgroundCol.value;
}
//////////////////////////////////////////////////////

//WORKINg WIT ARRAY OF OBJECTS AND ADDINDg EVENT LISTENERS
let nameAndDetails = [];
addBtn.addEventListener('click', add);
let getNames;
let setNames;
function add() {
  let userName = nameD.value;
  let emailId = emails.value;
  let pass = passWrd.value;
  nameAndDetails.push({ name: userName, email: emailId, password: pass });
  show();
}
function show() {
  tableBody.innerHTML = '';
  nameD.value = '';
  emails.value = '';
  passWrd.value = '';
  for (let i = 0; i < nameAndDetails.length; i++) {
    tableBody.innerHTML += `<tr>
      <td>${i + 1}</td>
      <td>${nameAndDetails[i].name}</td>
      <td>${nameAndDetails[i].email}</td>
      <td><input id="inpp" type='password'class="border-0 bg-transparent outline-none" value='${
        nameAndDetails[i].password
      }' readonly><i class="fa fa-eye" onclick=showPasswordInTable(${i})></i></td>
      <td><button class="btn rounded-circle btn-light" onclick="deleteRow(${i})"><i class="fa-solid text-danger fa-trash"></i></button></td>
    </tr>`;
    console.log(i);
  }
  saveNames = localStorage.setItem(
    'namesAndDetailsOfPeeps',
    JSON.stringify(nameAndDetails)
  );
}
// localStorage.clear('namesAndDetailsOfPeeps')
//Saving table details tp local storage
getNames = localStorage.getItem('namesAndDetailsOfPeeps');
function checkNames() {
  if (getNames) {
    nameAndDetails = JSON.parse(getNames);
    show();
  }
}
checkNames();

function deleteRow(index) {
  nameAndDetails.splice(index, 1);
  show();
}
function showPasswordInTable(i) {
  console.log(i);
  if (inpp[i].type == 'password') {
    inpp[i].type = 'text';
  } else {
    inpp[i].type = 'password';
  }
}
passwordToggle.addEventListener('click', toggle1);
function toggle1() {
  if (passWrd.type == 'password') {
    passWrd.type = 'text';
  } else {
    passWrd.type = 'password';
  }
}

/////////////////////////////////////////////////////////////

//SET TIMEOUT--TO DELAY
// let timer = setTimeout(function () {
//   alert('hello world');
// }, 3000);
//
// setInterval (function(){
//   console.log('hello world');
// })
// let i = 0
// let timer = setInterval(function () {
//   i++
//   console.log(i);
//   if (i ==20){
//     clearInterval(timer)
//   }
// }, 10);

// let j = 0
// function aa(){
//   j++
//   console.log(j);
//   if (j<20){
//    setTimeout(() => {
//      aa()
//    }, 100);
//   }
// }

let date = new Date();
console.log(date.setMinutes(),'lllllllllllllllllllllllllllllllll');
// function showTable(){
//     let startingPoint = startNumber.value;
//     let endPoint = endNumber.value;
//     for (let i =startingPoint;i <= endPoint;i++){
//         for (let j= 0;j<12;j++){
//             let result = i*(j+1);
//             multiplicationResult.innerHTML += `${i} *${j+1}= ${result}<br><br> `
//         }
//         multiplicationResult.innerHTML +=`<br> <p></p>`
//     }
// }
// function playy(){
//   let mp3 = new Audio('./perfect.mp3')
//   mp3.play()
// }
// addBtn.addEventListener('click',playy)
////////////////////////////////////////////

//for each loop
let namez = ['django', 'hunb', 'jhdiomn', 'jpog'];
namez.forEach(function (element, i) {
  console.log(i, element);
});
let namz = [
  { name: 'dajngo' },
  { name: 'dajngo' },
  { name: 'dajngo' },
  { name: 'dajngo' },
];
namz.forEach(function (element, i) {
  console.log(`for each`, i, element.name);
});
let obj = { name: 'teslim', age: 10, email: 'teslim@gmail.com' };
for (key in obj) {
  console.log(`'key':${key} ,${obj[key]}`);
}
for (x of namez) {
  //to loop through an iterabale
  console.log(`x:${x}`);
}
btns.addEventListener('click', function (event) {
  if (obj[texts.value]) {
    console.log(obj[texts.value]);
  } else {
    console.log((obj[texts.value] = 'new value'));
  }
});
//filter woul;d creatye a new array automatically
//for of
//for in
//for each
let peeps = [
  { name: 'dajng', age: 10 },
  { name: 'dajn', age: 15 },
  { name: 'daj', age: 10 },
  { name: 'da', age: 15 },
];
let older = peeps.filter(function (element) {
  return element.age == 15;
});
older.forEach(element => {
  if(element.name == 'dajn' && element.age == 15) console.log('trueeeeeeeeeeeeeeeeeeeeeeee');
});
console.log(`filter`, older);
let onames = peeps.find(function (element) {
  return element.age == 15 && element.name =='da';
});
console.log(`find:`, onames);
let oname = peeps.map(function (element) {
  return element.name;
});
let un = 'da';
if (oname.join('').includes(un)) {
  console.log('yrahhhhhhhhhhhhhhh');
} else {
  console.log('nnnnnnnnnnnnnnnnnnn');
}
console.log(`map:`, oname);
let numbas = [2, 4, 6, 8, 9];
let onamez = numbas.reduce(function (a, b) {
  return a + b;
});
console.log(onamez);
///////////////////////////////////////////////////////////

//LOCAL STORAGE
// localStorage.setItem('name','Teslim')
// let getName = localStorage.getItem('name')
//to clear
// localStorage.removeItem('name')
//to save an arry in local storage..we  stringify
// let peeps = [{name:"dajng",age:10},{name:"dajn",age:15},{name:"daj",age:10},{name:"da",age:15}]
// let getnames2 = localStorage.setItem('people',JSON.stringify(peeps))
// console.log(JSON.parse(getnames2));
let uu = '999.99';
console.log(uu.indexOf('.'));
//////////////////////////////////////////////////////////////

//REGEX
let regex = /tes/i; //range[] //quantifier{min,max} * ==zero or more......+==one or more
let regexp = /[a-z](?=.*[@]{0,1})/;
regex = /[0-9]*/;
// caret outside the [] means it must start with whatevr follows
//dollar sign means it must end with whatevr follewss
regex = /^...zx$/; //start with any three character and end with zx
// console.log(regex.test('mjkzx'));
console.log(`regexp`, regexp.test('a@po@'));
//OR DECLARE USING
let reg = new RegExp(/^...zx$/, 'gi');
let reex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@# \+\*])(?=.{8,})/;

let email = new RegExp('^[a-zA-Z0-9#$%^&.*]+@[a-z]+.com$');

let mail2 = /^[a-zA-Z0-9#$%^&.*]+@[a-z]+([.][a-z]{2,3})$/;

function validateMail() {
  if (mail2.test(emailInpp.value)) {
    spann.style.color = 'green';
    spann.innerHTML = `<strong>Valid<strong/>`;
    emailInpp.style.borderColor = 'green';
  } else {
    spann.style.color = 'red';
    emailInpp.style.borderColor = 'red';
    spann.innerHTML = `<strong>Invalid email...<strong/>`;
  }
}
let phone = /^\+[2]{1}[3]{1}[4]{1}\d{10}$/;
console.log(phone.test('+2344251627387'));
function validatePhoneNumber() {
  let number = numInp.value;
  let rep = '';
  console.log(number);
  console.log(number.charAt(4));
  if (number.charAt(4) === '0') {
    rep = number.replace(/0/, '');
    numInp.value = rep;
    phone.test(rep)
      ? console.log(`VALID NUMBER`, true)
      : console.log(`INVALID NUMBER`, false);
  } else {
    phone.test(number)
      ? console.log(`VALID NUMBER`, true)
      : console.log(`INVALID NUMBER`, false);
  }
}

let regg = /^[0-9]{2,3}\.[0-9]{2}$/;
console.log(`regggg`, regg.test('12.34'));

// console.log(reex.test('mTkzxdds*5'));
//ARROW FUNCTIONS
let hello = (param, dj) => {
  return param;
};
[''].forEach(ele => {});
//DATA DESTRUCTION
// let a =[12,6,4,7,8,9,6]
// let [b,c,d]=a
//to skip values
// let [f,w,h,,,,i]=a
// console.log(i);
// let pers ={named:'Teslim',age:10,hobbies:['coding','eating']}
// let {named:username,hobbies:[cod]}=pers
let ab = [{ named: 'teslim', hobbies: ['dancing', ['hob1', 'hob2', { size: 20 }]] }];
// console.log(na);
let [{hobbies: [, [, , { size }]],}] = ab;
console.log(size);
let a = [12, 4, 6, 3, 6, 9, 0];
let objj = { name: 'somethoing', ...a };
console.log(objj);
function des(...param) {
  console.log(param);
}
des({ name: 'Teslim', age: 20 }, 345, 'string');
//promise

let jm = new Promise((resolve, reject) => {
  setTimeout(() => {
    return reject('Error');
  }, 5000);
}).then(respon => {
  alert('')
  console.log(respon);
})
  .catch(error => console.log(error))
  .finally(() => console.log('Finally'));

//consumin an API
function getData() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json()) //goes to server
    .then(json => {
      loader.hidden = true;
      json.forEach(post => {
        postS.innerHTML += `<div class='col-3 card'><p>${post.title}<p></div>`;
      });
    });
}

// async function getData2(){
//   try {
//     let data = await  fetch('https://jsonplaceholder.typicode.com/posts')
//     let json = await data.json()
//     loader.hidden=true;
//     json.forEach((post)=>{
//       postS.innerHTML+=`<div class='col-3 card'><p>${post.title}</p></div>`
//       console.table(json);
//     });
//   } catch (error) {
//     console.log('something went wrong while fetching');
//   }
// }
getData();

//OOP 
// function Human(name,gender,eyes){
//   this.name =name
//   this.gender = gender
//   this.eyes = eyes
//   this.canSee = function(){
//     return this.eyes ==2
//   }
// }
// let personn = new Human('Eve','Female',2)
// personn ={name:'EVE',gender:'Female',eyes:2}
// console.log(personn);
// console.log(personn.name,personn.canSee());

// class Human {
//   name = 'Adam';
//   lName = 'God';
//   gender = 'Male';
//   eyes = 2;
//   constructor(name, gender, eyes) {
//     this.name = name;
//     this.gender = gender;
//     this.eyes = eyes;
//   }
//   canSee() {
//     return this.eyes == 2;
//   }
//   fullName() {
//     return this.name + ' ' + this.lName;
//   }
//   nickName(name) {
//     return (this.nickName = name);
//   }
// }
// class Eve extends Human {
//   // breast = true;
//   constructor() {
//     super('Eve', 'Female', 2); 
//   }
// }
// let person = new Eve();
// console.log(person.fullName());
// person.nickName='mama eve';
// console.log(person.nickName('mama eve'));
// //access modifier..private,public,protected

// class calculator {
//   screen = '';
//   constructor(myscreen) {
//     this.screen = document.querySelector(myscreen);
//   }
//   showNumbers = numbers => {
//     this.screen.value += numbers;
//   };
//   showAnswer() {
//     try {
//       this.screen.value = eval(this.screen.value);
//     } catch (error) {
//       alert('Invalid something');
//       this.screen.value = '';
//     }
//   }
// }
// const calc = new calculator('#screen');
// console.log(typeof calc);
// const btnn = document.querySelectorAll('#tb1 button');
// btnn.forEach(bt => {
//   bt.addEventListener('click', () => {
//     if (bt.innerText == '=') {
//       calc.showAnswer();
//     } else {
//       calc.showNumbers(bt.innerText);
//     }
//   });
// });
// console.log(btnn); //any butoon in the table
// const calc2 = new calculator('#screen1');
// const btnn2 = document.querySelectorAll('#tb2 button');
// btnn2.forEach(bt => {
//   bt.addEventListener('click', () => {
//     if (bt.innerText == '=') {
//       calc2.showAnswer();
//     } else {
//       calc2.showNumbers(bt.innerText);
//     }
//   });
// });
// console.log(btnn2); //any button in the table

// /////////////////////////////////////////////
// const language = {
//   languageName: 'Javascript',
//   get getName() {
//     return this.languageName 
//   },
// };
// console.log(language.languageName);
// console.log(language.getName);
// const language2 = {
//   languageName: 'Javascript',
//   set changeName(name) {
//     this.languageName = name 
//   },
// };
// console.log(language2.languageName);
// console.log(language2.changeName='Python');
// console.log(language2.languageName);
// console.log(language2);
// class Language{
//   constructor(name){
//     this.name= name
//   }
//   static hello(x){
//     return 'Hello'+' '+x.name
//   }
// }
// let language1 = new Language('Javascript')
// console.log(Language.hello(language1));
let mdate = new Date
console.log('kkkkkkkkkkkkkkkkkkkkkkkkkk');
let pp = new Promise((resolve,reject)=>{
  let sum = 2 +1
  if (sum === 3) {
    resolve('successful')
  } else {
    reject('Failed')
  }
})
pp.then((message)=>{
  console.log('This is in the then'+message);
}).catch((message)=>{
  console.log('This is in the then'+message);
})
console.log(pp);
// /c/Users/USER/Desktop/html/generalCalculator-main/generalCalculatorprac
let ppp = [8,9,5,4,6]
for (let i = 0; i < 13; i++) {
  console.log(i * 2);
  
}

