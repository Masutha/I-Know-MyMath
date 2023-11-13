// Get the span elements
//var spanElements = document.querySelectorAll("span");
var Calc_Keys=document.querySelectorAll("span")
// Add a click event listener to each span element
var No_Keys=Calc_Keys.length;
for (var i = 0; i < No_Keys; i++) {
 // spanElements[i].addEventListener("click", printInnerHTMLToScreen);
 Calc_Keys[i].addEventListener("click", ScreenPrint);
}


// Function to print out the innerHTML of a span element to the screen div
//function printInnerHTMLToScreen(event) {
function ScreenPrint(event) {
  // Get the span element that was clicked
  //var clickedSpanElement = event.target;
  var Key_Pressed= event.target;
console.log(Key_Pressed);
  // Get the innerHTML of the clicked span element
  //var clickedInnerHTML = clickedSpanElement.innerHTML;
var clickedInnerHTML=Key_Pressed.innerHTML;
console.log(clickedInnerHTML);
  // Get the screen div
  var screenDiv = document.querySelector(".screen");
var ScreenExpression='';
  // Set the innerHTML of the screen div to the clicked innerHTML
   if(clickedInnerHTML=='C'){
    screenDiv.innerHTML ="";
  }
  else{
   let Prev=screenDiv.innerHTML
    console.log(Prev);
    screenDiv.innerHTML =screenDiv.innerHTML+ clickedInnerHTML;
let Xan=screenDiv.innerHTML;
  if((clickedInnerHTML=='=')){
    let expression = Prev;
console.log(expression);
    // // Remove all whitespace from the string.
     const expressionWithoutWhitespace = expression.replace(/\s+/g, '');
    
    // // Replace all operators with their JavaScript equivalents.
     const expressionWithJavaScriptOperators = expressionWithoutWhitespace.replace('+', '+')
       .replace('-', '-')
       .replace('x', '*')
      .replace('÷', '/');
    
    // // Evaluate the expression using JavaScript's eval() function.
     const result = eval(expressionWithJavaScriptOperators);
    
    console.log(result); // 7
    screenDiv.innerHTML =screenDiv.innerHTML + result;
  }
  
   
  } 
  
 ScreenExpression= screenDiv.innerHTML;
console.log(ScreenExpression);  
}








// //   function convert_string_to_math_expression(string) {
//     // Split the string into an array of tokens.
//     const tokens = string.split(" ");
  
//     // Iterate over the array of tokens and convert each token to its corresponding
//     // mathematical operator or operand.
//     let math_expression = "";
//     for (const token of tokens) {
//       switch (token) {
//         case "+":
//           math_expression += "+";
//           break;
//         case "-":
//           math_expression += "-";
//           break;
//         case "*":
//           math_expression += "*";
//           break;
//         case "/":
//           math_expression += "/";
//           break;
//         case "^":
//           math_expression += "^";
//           break;
//         default:
//           // Replace all numbers with the variable "x".
//           math_expression += screenDiv.innerHTML;
//           break;
//       }
//     }
//       var Value= eval(math_expression)
//     return Value;
//   }
//  }


//   else{
//     screenDiv.innerHTML =screenDiv.innerHTML+ Value;
//  console.log(Number(screenDiv.innerHTML));
//  Expression=screenDiv.innerHTML;
// } 










// var Calc_Keys=document.querySelectorAll(".keys>span");
// var No_Keys=Calc_Keys.length;
// //a function for when any key is clicked to print on screen
// //for(var i=0;i<No_Keys;i++){
//     console.log(Calc_Keys[1]);
// var Key_Pressed=Calc_Keys[1].innerText;
//     console.log(Key_Pressed);
//     //the high-Order function for clicks,addEventlistener
 
//    //console.log( "Before: "+LCD_Screen);
//     Calc_Keys[1].addEventListener("click", ScreenPrint)
//     function ScreenPrint(){
//        var LCD_Screen=document.querySelector(".screen"); 
//       // LCD_Screen.innerHTML= LCD_Screen.setAttribute(span,Calc_Keys[0]) ;
//          LCD_Screen.innerText=  Key_Pressed;
//         console.log( "During: "+LCD_Screen);
// }
