const numbers = document.querySelectorAll('.number');
const input = document.querySelector('.input');
const equal = document.querySelector('.equals')
const operators = document.querySelectorAll('.operator');
const cancel = document.querySelector('.clear');

let firstNumber;
let secondNumber = '';
let operator;
let total;

// On-click displays the value
numbers.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event.target.innerHTML)
    // Show the input
    input.innerHTML = input.innerHTML + event.target.innerHTML;

    // if the operator/button is clicked, 
    // second number appends to itself
    if (firstNumber && operator) {
      secondNumber = secondNumber + event.target.innerHTML;
    }
  });
});

operators.forEach((symbol) => {
  symbol.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event.target.innerHTML)
    // Setting variables 
    firstNumber = input.innerHTML;
    operator = event.target.innerHTML;
    // Adding the symbol to the input
    input.innerHTML = input.innerHTML + event.target.innerHTML;
  });
});

// When pressed "=" take the input/value (need to use querySelector)
equal.addEventListener("click", () => {
  total = getTotal(firstNumber, operator, secondNumber);
  input.innerHTML = input.innerHTML + event.target.innerHTML
  input.innerHTML = input.innerHTML + total;
});

// Make a function of calculation with input string
const getTotal = (firstNumber, operator, secondNumber) => {
 // Change numbers to number & symbols stays as string
 const intFirstNum = parseFloat(firstNumber);
 const intSecondNum = parseFloat(secondNumber);

 // switch on symbol
 // do the calc in javascript
 // return the result
 switch(operator) {
   case '+':
     return intFirstNum + intSecondNum;
   case '-':
     return intFirstNum - intSecondNum;
   case '÷':
     return (intFirstNum / intSecondNum).toFixed(5);
   case 'x':
     return intFirstNum * intSecondNum;
 }  
};

//  Cancel function
cancel.addEventListener("click", (event) => {
  event.preventDefault();
  // Show the input
  firstNumber = "";
  secondNumber = "";
  input.innerHTML = "";
}); 

