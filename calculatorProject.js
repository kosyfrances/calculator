//This javaScript code is for a simple basic calculator

var answer = 0,
    operatorClicked = false,
    lastOperator = "";

function clickNumber(number) {
  var text = document.getElementById("textBox");

  if ((number.value === "") && (text.value === "") && (number.value === ".")) {
    //This condition enables the decimal point to work after the AC button is pressed
    text.value = 0.;
  }  
  else if (number.value === "CE") {
    //The CE is like the ON button so it displays a zero in the textbox
    text.value = 0;
    answer = 0;    
  }
  else if ((text.value === "0") && (number.value !== ".") || (operatorClicked)) {
    /* 
    This condition removes leading zeros
    and also allows the decimal point (if clicked)to append to zero instead of overwrting it.
    It also replaces the textbox's value with the next after an operator is clicked. 
    */
    text.value = number.value; 
    operatorClicked = false;
  }
  else if (number.value === "") {
    //This condition is for AC which acts like the OFF button
    text.value = "";
    answer = 0;
  }
  else {
    text.value += number.value; 
    //This returns and appends the numbers pressed to the textbox
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

function doOperation (operator) {
  var text = document.getElementById("textBox"),
      textInput = parseFloat(text.value);

  switch(operator.value) {
    case "+":      
      answer = add(answer, textInput);
      text.value = answer;
      operatorClicked = true;
      break;

    case "-":       
      if (answer !== 0) {
        answer = subtract(answer, textInput);
      }
      else {
        answer = textInput; 
      }    
      text.value = answer; 
      operatorClicked = true;
      break;

    case "*":         
      if (answer !== 0) {
        answer = multiply(answer, textInput);
      }
      else {
        answer = textInput; 
      }    
      text.value = answer;
      operatorClicked = true; 
      break;

    case "/":      
      if (answer !== 0) {
        answer = divide(answer, textInput);
      }
      else {
        answer = textInput; 
      }    
      text.value = answer; 
      operatorClicked = true;
      break;

    case "=":      
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
        text.value = answer;
      }
      else {
        text.value = textInput;
      }
      answer = 0;
      operatorClicked = true;
      break;
  }
  lastOperator = operator.value;
} 


