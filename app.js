const numbers = document.querySelectorAll('.number');
const input = document.querySelector('.input');
const equal = document.querySelector('.equals');
const operators = document.querySelectorAll('.operator');
const cancel = document.querySelector('.clear');
const plusMinus = document.querySelector('.plus-minus');

let firstNumber;
let secondNumber = '';
let operator = '';
let total = 0;
let isPlusMinus = false;

// On-click displays the value
numbers.forEach((button) => {
  button.addEventListener('click', (event) => {
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
  symbol.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target.innerHTML)
    // Setting variables 
    firstNumber = input.innerHTML;
    // operator.push(event.target.innerHTML);
    operator = operator + event.target.innerHTML
    // Adding the symbol to the input
    input.innerHTML = input.innerHTML + event.target.innerHTML;
  });
});

// When pressed '=' take the input/value (need to use querySelector)
equal.addEventListener('click', (event) => {
  const totalValue = getTotal(firstNumber, operator, secondNumber);

  total = totalValue;

  if (isPlusMinus) {
    total = totalValue * -1;
    isPlusMinus = false;
  }

  firstNumber = total;
  secondNumber = '';
  operator = '';

  input.innerHTML = total;
});

// Make a function of calculation with input string
const getTotal = (firstNum, operator, secondNum) => {

  if (!operator && !secondNum) {
    return firstNum;
  }

 // Change numbers to number & symbols stays as string
 let intFirstNum = parseFloat(firstNum);
 let intSecondNum = parseFloat(secondNum);

 // switch on symbol
 // do the calc in javascript
 // return the result
 switch(operator) {
    case '+':
      return intFirstNum + intSecondNum;
    case '-':
      return intFirstNum - intSecondNum;
    case '??':
      return (intFirstNum / intSecondNum).toFixed(5);
    case 'x':
      return intFirstNum * intSecondNum;
    case '%': 
        return (intFirstNum / 100);
    //  % after other operators
    case '+%':
      return intFirstNum + (intSecondNum / 100 * intFirstNum);
    case '-%':
      return intFirstNum - (intSecondNum / 100 * intFirstNum);
    case '??%':
      return (intFirstNum / (intSecondNum / 100)).toFixed(5);
    case 'x%':
      return intFirstNum * (intSecondNum / 100 );
    //  % before other operators
    case '%+':
      return (intFirstNum / 100) + intSecondNum;
    case '%-':
      return (intFirstNum / 100) - intSecondNum;
    case '%??':
      return ((intFirstNum / 100) / intSecondNum).toFixed(5);
    case '%x':
      return (intFirstNum / 100) * intSecondNum;
 }  
};

plusMinus.addEventListener('click', (event) => {
  isPlusMinus = true;
});

//  Cancel function
cancel.addEventListener('click', (event) => {
  event.preventDefault();
  // Show the input
  firstNumber = '';
  secondNumber = '';
  operator = '';
  total = 0;
  input.innerHTML = '';
  isPlusMinus = false;
}); 