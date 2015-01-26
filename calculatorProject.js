//This javaScript code is for a simple basic calculator

var answer = 0,
    operatorClicked = false,
    lastOperator = "";

function clickNumber(number) {
  var text = document.getElementById("textBox");
  
  //This condition checks for decimal point and stops appending it if it exists in the textbox.
  if((text.value.indexOf(".") !== -1) && (number.value === ".")) {
    number.value = "."; 
  }
  else if (number.value === "C") {    
    text.value = 0;
    answer = 0;    
    lastOperator = "";
    operatorClicked = false;
  }
  /* 
    The condition below removes leading zeros
    and also allows the decimal point (if clicked)to append to zero instead of overwrting it.
    It also replaces the textbox's value with the next after an operator is clicked. 
  */
  else if ((text.value === "0") && (number.value !== ".") || (operatorClicked) ) {    
    text.value = number.value; 
    operatorClicked = false;
  }
  //The condition below returns and appends the numbers pressed to the textbox
  else {
    text.value += number.value;     
  }
}

function add(answer, textInput) {  
  var sum;
  sum = answer + textInput;
  return sum;
}

function subtract(answer, textInput) {  
  var sum;
  sum = answer - textInput;
  return sum;
}

function multiply(answer, textInput) {  
  var sum;
  sum = answer * textInput;
  return sum;
}

function divide(answer, textInput) {  
  var sum;
  sum = answer / textInput;
  return sum;
}

function modulo(answer, textInput) {
  var sum;
  sum = answer % textInput;
  return sum;
}

function squareRoot(answer) {
  var sum;
  sum = Math.sqrt(answer);
  return sum;
}

function cubeRoot(answer){
  var sum;
  sum = Math.cbrt(answer);
  return sum;
}

function power2(answer) {
  var sum;
  sum = Math.pow(answer, 2);
  return sum;
}

function power3(answer) {
  var sum;
  sum = Math.pow(answer, 3);
  return sum;
}

function powerN(answer, textInput) {
  var sum;
  sum = Math.pow(answer, textInput);
  return sum;
}

/*
This function converts values to radians as javascript sin, cos and tan functions expect values in radians,
so that the output will be same as in degrees.
*/
function numInRad(num){
  return num * (Math.PI/180);
}

function cos(answer) {
  var sum;
  sum = Math.cos(numInRad(answer));
  return sum;
}

function sin(answer) {
  var sum;
  sum = Math.sin(numInRad(answer));
  return sum;
}

function tan(answer) {
  var sum;
  sum = Math.tan(numInRad(answer));
  return sum;
}

function log(answer) {
  var sum;
  sum = Math.log10(answer);
  return sum;
}

function equals(answer, textInput) {
  var text = document.getElementById("textBox");
  
  switch (lastOperator) {
    case "+":
      answer = add(answer, textInput);
      text.value = answer;
      break;
  
    case "-": 
      answer = subtract(answer, textInput);
      text.value = answer;
      break;
  
    case "*":
      answer = multiply(answer, textInput);
      text.value = answer;
      break;
  
    case "/":
      answer = divide(answer, textInput);
      if (answer === Infinity) {
        text.value = "Not A Number";
      }
      else {
        text.value = answer; 
      }
      break;
  
    case "%":
      answer = modulo(answer, textInput);
      text.value = answer;
      break;

    case "sqrt":
      answer = squareRoot(answer);
      text.value = answer;
      break;

    case "cubeRt":
      answer = cubeRoot(answer);
      text.value = answer;
      break;
    
    case "power2":
      answer = power2(answer);
      text.value = answer;
      break;
    
    case "power3":
      answer = power3(answer);
      text.value = answer;
      break;

    case "powerN":
      answer = powerN(answer, textInput);
      text.value = answer;
      break;

    case "cos":
      answer = cos(answer);
      text.value = answer;
      break;

    case "sin":
      answer = sin(answer);
      text.value = answer;
      break;

    case "tan":
      answer = tan(answer);
      text.value = answer;
      break;
    
    case "log":
      answer = log(answer);
      text.value = answer;
      break;

    default:
      answer = textInput;
      text.value = answer;    
  }
  return answer;
  operatorClicked = true;
} 

function doOperation(operator) {
  var textInput = parseFloat(document.getElementById("textBox").value);

  answer = equals(answer, textInput);
  operatorClicked = true;  
  lastOperator = operator.value;
} 

