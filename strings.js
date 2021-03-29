function myfunction (read) {
    var x =  read.toUpperCase() + read.toLowerCase();
return x
}
console.log(myfunction("read"));

// #2: Make a function that returns a number half the length, and rounded down.
function myFunction (str) {
    var middleOfString = Math.floor (str.length/2) ;
    return middleOfString;
} console.log (myFunction("test"));

// # 3: Make a function that uses a slice().
function halfstringFunction (half){
console.log (half)
return half.slice (0,5) }
console.log (halfstringFunction("strawberry"));

//4. Make a function that return a string and return captialized and lower.
function capitalandlowercase (hello){
return hello.slice(0,4).toUpperCase() + hello.slice(4).toLowerCase()
} 
 console.log (capitalandlowercase("HELLOhi"));

 //5. read line sync
 var readlineSync = require ('readline-sync');
 var firstNumber=readlinesyn .questionInt ("Please enter your first number:");
 var secondNumber=readlinesync.questionInt ("Please enter your second number:");
 var enteredOperation = readlineSync.question ("Please enter the operation to perform: add, sub, mul, div");
 
 //add functions
 function addTwoNumbers(num1, num2,){
return (num1 + num2);
 }

 function calculator (number1, number2, operator){
if (operator =="add"){
 // The additional function
 console.log ("Addition of two numbers:" + addTwoNumbersnumber1, number2);
//conditional functions
} else if (operaton =="sub")

// subtraction function } else if (operation=="mul"){
 
} else if (operation =="div")
//call the divison function

} else {
// catch all message

//Call the calculator function
calculator(firstNum,secondNum,enteredOperation);




 




// //var slice () method
// function myFunction {z,} ;{

// }
//     console.log

// function  myFunction {helloWorld};
// console.log

// function myFunction { Helloworld};
// console.log



// Var ("HI world"); 
// console.log

// Function (" Hello Friends ! Practice Practice Practice ! ")
// console.log
