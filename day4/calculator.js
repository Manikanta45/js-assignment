let number1=+prompt("Enter the number1")
let number2=+prompt("Enter the number2")
let option=prompt("Enter the operation like addition, subtraction, multiplication, division, square root, percentage")
let resultNum;
  // Performing  operation
  switch (option) {
case "addition" :
resultNum = number1 + number2;
break;

case "subtraction" :
resultNum = number1 - number2;
break;

case "multiplication":
resultNum = number1 * number2;
break;

case "division":
resultNum = number1 / number2;
break;
case "square root":
resultNum =  Math.sqrt(number1);
break;
case "percentage":
resultNum = (number1 / number2) * 100;
break;
default:
    resultNum;

}

console.log("Output is :",resultNum)