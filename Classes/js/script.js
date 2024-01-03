class calculator{
    screen='';
    constructor(myscreen){
      this.screen = document.querySelector(myscreen);
    }
    showNumbers=(numbers)=>{
      this.screen.value +=numbers;
  
    }
    showAnswer(){
      try {
        this.screen.value = eval(this.screen.value)
      } catch (error) {
        alert('Invalid something')
        this.screen.value = ''
      }
      
    }
  }
  const calc = new calculator('#screen')
  const btnn = document.querySelectorAll('#tb1 button')
  btnn.forEach((bt)=>{
    bt.addEventListener('click',()=>{
      if (bt.innerText == '=') {
        calc.showAnswer()
      } else {
        calc.showNumbers(bt.innerText)
      }})
  })
  console.log(btnn);; //any butoon in the table
  const calc2 = new calculator('#screen1')
  const btnn2 = document.querySelectorAll('#tb2 button')
  btnn2.forEach((bt)=>{
    bt.addEventListener('click',()=>{
      if (bt.innerText == '=') {
        calc2.showAnswer()
      } else {
        calc2.showNumbers(bt.innerText)
      }})
  })
  console.log(btnn2);; //any butoon in the table
  