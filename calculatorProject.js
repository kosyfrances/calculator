//This javaScript code is for a simple basic calculator

var answer = 0,
    operatorClicked = false,
    lastOperator = "";

function clickNumber(number) {
  var text = document.getElementById("textBox");
  
  if (number.value === "C") {    
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
  else if ((text.value === "0") && (number.value !== ".") || (operatorClicked)) {    
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

function equals(answer, textInput) {
  var text = document.getElementById("textBox");

  if (lastOperator === "+") {
    answer = add(answer, textInput);
    text.value = answer;
  }
  else if (lastOperator === "-") { 
    answer = subtract(answer, textInput);
    text.value = answer;
  }
  else if (lastOperator === "*") { 
    answer = multiply(answer, textInput);
    text.value = answer;
  }
  else if (lastOperator === "/") { 
    answer = divide(answer, textInput);
    if (answer === Infinity) {
      text.value = "Not A Number";
    }
    else {
      text.value = answer; 
    }
  }
  else {
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

