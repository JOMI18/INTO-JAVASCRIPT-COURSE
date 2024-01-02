class Humans {
  //   name = "Adam";
  legs = 2;
  nickName;
  constructor(name = "Adam") {
    this.name = name;
  }
  get canWalk() {
    return this.legs == 2;
  }
  //   canWalk() {
  //     return this.legs == 2;
  //   }
  //   setNickname(nickn) {
  //     this.nickName = nickn;
  //   }
  set Nickname(nickn) {
    this.nickName = nickn;
  }
}

let eve = new Humans();
console.log(eve);
// console.log(eve.canWalk());
console.log(eve.canWalk);
console.log(eve.nickName);
// eve.setNickname("Jomi");
eve.Nickname = "Jomi";
console.log(eve.nickName);

class Calculator {
  // constructor(display, color) {
  // this.id = display;
  // this.color = color;

  // constructor(...props) {
  // this.id = props[0];
  // this.color = props[1];

  constructor({ selector, color }) {
    this.id = selector;
    this.color = color;
    this.display = document.getElementById(selector);
    // this.display = document.querySelector(display);
    this.show();
  }

  show() {
    this.display.innerHTML = `<input type="text" />
    <br>
      <button class="btn ${this.color}">0</button>
      <button class="btn ${this.color}">1</button>
      <button class="btn ${this.color}">2</button>
      <button class="btn ${this.color}">3</button>
      <button class="btn ${this.color}">4</button>
      <button class="btn ${this.color}">5</button>
      <button class="btn ${this.color}">6</button>
      <button class="btn ${this.color}">7</button>
      <button class="btn ${this.color}">8</button>
      <button class="btn ${this.color}">9</button>
      <button class="btn ${this.color}">+</button>
      <button class="btn ${this.color}">-</button>
      <button class="btn ${this.color}">/</button>
      <button class="btn ${this.color}">*</button>
      <button class="btn ${this.color}">=</button>`;

    let id = this.id;
    // document.querySelectorAll(`${this.id} button`).forEach((element) => {
    document.querySelectorAll(`#${this.id} button`).forEach((element) => {
      console.count(`#${this.id} button`);
      element.addEventListener("click", function (e) {
        if (e.target.innerText == "=") {
          try {
            // console.log(document.querySelector(`#${id} input`).value);
            document.querySelector(`#${id} input`).value = eval(
              document.querySelector(`#${id} input`).value
              // document.querySelector(`${id} input`).value = eval(
              //   document.querySelector(`${id} input`).value
            );
          } catch (error) {
            alert("Invalid operation");
          }
          return;
        }
        document.querySelector(`#${id} input`).value += e.target.innerText;
        // document.querySelector(`${id} input`).value += e.target.innerText;
      });
    });
  }
}

// new Calculator("calculator", "btn-info");
new Calculator({ selector: "calculator", color: "btn-info" });
// new Calculator("#calculator", "btn-info");

// new Calculator("calculator2", "btn-danger");

new Calculator({ selector: "calculator2", color: "btn-danger" });

class Characters {
  walk() {
    console.log("walks");
  }
  jump() {
    console.log("jumps");
  }
  guard() {
    console.log("guards");
  }
}

class Lukan extends Characters {
  bkKick() {
    console.log("lukan's kick");
  }
}
const luke = new Lukan();

console.log(luke.guard());

class sz extends Characters {
  iceThrow() {
    console.log("sz's kick");
  }
}

function lukain() {}

lukain.prototype.Kick = function () {
  console.log("lukain jumps");
};

const luk = new lukain();
luk.Kick();
