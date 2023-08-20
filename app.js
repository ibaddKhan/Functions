// Q1: Create a block of code that you can use several times.
// Q2: Write a function that takes first & last name and then it greets the user using his full name.
// Q3: Write a function that adds two numbers (input by user) and returns the sum of two numbers.
// Q4: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the     desired result in your browser.
// Q5: Write a function that squares its argument.
// Q6: Write a function that computes factorial of a number.

// Problem Number:1
// function Addingnums(a, b) {
//   let sum = a + b;
//   return sum;
// }
// let Num1 = +prompt("Enter Any Number");
// let Num2 = +prompt("Enter Any Number to Add");
// console.log(Addingnums(Num1, Num2));

// let Num3 = +prompt("Enter Your Numbers");
// let Num4 = +prompt("Enter Second Number");
// console.log(Addingnums(Num3, Num4));

// Problem Number:2

// function greet(a, b) {
//   let fullname = a + b;
//   return fullname;
// }
// let firstname = prompt("Enter Your Name");
// let SurName = prompt("Enter Your SurName");
// console.log(
//   greet(
//     firstname + " ",
//     SurName + " " + "Assalam-u-Alaikum All the Way From London"
//   )
// );

// Problem Number:3

// function Addingnums(a, b) {
//   let sum = a + b;
//   return sum;
// }
// let Num1 = +prompt("Enter Any Number");
// let Num2 = +prompt("Enter Any Number to Add");
// console.log(Addingnums(Num1, Num2));

// Problem Number:4

// let Input1 = +prompt("Enter Number 1 to Calculate");
// let operator = prompt("Enter Any Operator");
// let Input2 = +prompt("Second Num to Calculate");

// let sum = Input1 + Input2;
// let min = Input1 - Input2;
// let multiply = Input1 * Input2;
// let div = Input1 / Input2;

// if (operator == "+") {
//   document.write(sum);
// } else if (operator == "-") {
//   document.write(min);
// } else if (operator == "*") {
//   document.write(multiply);
// } else if (operator == "/") {
//   document.write(div);
// } else {
//   document.write("<h1> Not an Operator</h1>");
// }

// let Input1 = +prompt("Enter Number 1 to Calculate");
// let operator = prompt("Enter Any Operator");
// let Input2 = +prompt("Second Num to Calculate");
// console.log(calculator(Input1, operator, Input2));

// function calculator(a, b, c) {
//   switch (operator) {
//     case "+":
//       let sum = Input1 + Input2;
//       console.log(sum);
//       break;

//     case "-":
//       let minus = Input1 - Input2;
//       console.log(minus);
//       break;

//     case "/":
//       let div = Input1 / Input2;
//       console.log(div);
//       break;

//     case "*":
//       let multiply = Input1 * Input2;
//       console.log(multiply);
//       break;

//     default:
//       return "Not an Operator";
//   }
// }

// Problem Number:5

// let num = +prompt("Enter A Number to get it Squared");
// let result = cal(num);
// console.log(result);

// function cal(a) {
//   let square = num * num;
//   return square;
// }

// // Assignment-02
// 01- Create two forms name and email and show their values in the console.
// 02- Create three input forms labeled 'num1,' 'num2,' and 'operator.' Build a basic calculator by implementing the operations we covered in class.
// 03- Create a dropdown menu containing options for each month. Implement a switch
//  statement that determines the corresponding weather season based on the selected month.
// For instance, if 'June' is chosen, display 'Summer'; if 'November' is selected, display 'Winter'.

// Question-01 N
// let namee = document.querySelector("#name");
// let email = document.querySelector("#email");
// function login() {
//   console.log(namee.value);
//   console.log(email.value);
// }

// Question-02 N

// function calculate() {

//     const num1 = +document.querySelector("#number1").value;
//     const operator = document.querySelector("#math").value;
//     const num2 = +document.querySelector("#number2").value;
//     const result = document.querySelector("#result")
//     if (operator == "+") {
//         result.value = num1 + num2
//         result
//     }
//      else if (operator == "-"){
//         result.value = num1 - num2;
//     }
//      else if (operator == "*"){
//         result.value = num1 * num2;
//     }
//      else if (operator == "/"){
//         result.value = num1 / num2;
//     }else{
//         document.querySelector("#result")= "Not an operator"
//     }
// }

// Question-03 N
function check() {
  const monthss = document.querySelector("#Month").value
  const resultt = document.querySelector("#input")

  switch (monthss) {
    case ("Jan"):
      resultt.value = "Winter"
      break;
    case ("Feb"):
      resultt.value = "Spring"
      break;
    case ("Mar"):
      resultt.value = "Spring"
      break;
    case ("Apr"):
      resultt.value = "Spring"
      break;
    case ("May"):
      resultt.value = "Summer"
      break;
    case ("June"):
      resultt.value = "Summer"
      break;
    case ("July"):
      resultt.value = "Summer"
      break;
    case ("Aug"):
      resultt.value = "Autumn"
      break;
    case ("Sep"):
      resultt.value = "Autumn"
      break;
    case ("Oct"):
      resultt.value = "Autumn"
      break;
    case ("Nov"):
      resultt.value = "Winter"
      break;
    case ("Dec"):
      resultt.value = "Winter"
      break;

    default:
      alert("Select a Month first")
      break;
  }
}



