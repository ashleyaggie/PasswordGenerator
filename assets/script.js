// Assignment Code
var generateBtn = document.querySelector("#generate");

// Possible characters
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Removed space and backslash from the options below. Space was hard to see, and backslash was messing up the code.
var specialChara = ["!", "”", "#", "$", "%", "&", "’", "(", ")", "*", "+",
",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// Prompts after click

// Function to generate the password from the above arrays
function generatePassword() {

  // Asks user to enter preferred password length. Mimimum of 8 characters and a maximum of 128.
  var passLength = prompt("Please enter length of password - 8 to 128 characters.");

  // If the password length is not a number or is under or over the limit, the user will receive an error message and the alerts will close.
  if (passLength < 8 || passLength > 128) {
    console.log(typeof passLength);
    alert("Invalid selection, please try again.");
    return;
  }

  // Declares the array that will hold the user's entered types of characters.
  var choice = [];

  // Asks the user yes or no if they want a certain type of character. If the user answers yes, it will add the type to the array. If not, nothing will happen and it will continue on.
  var optionLC = confirm("Does your password need lowercase letters?");
  
  var optionUC = confirm("Does your password need uppercase letters?");
  
  var optionN = confirm("Does your password need numbers?");
  
  var optionSC = confirm("Does your password need special characters?");
  
  // Combines the "choice" array into a single string for easier selection in the if-else statements.
  // var passCharacters = choice.join(" ");

  // Lowercase only
  if (optionLC === true) {
    choice = choice.concat(lowercase);
  }

  // Uppercase only
  if (optionUC === true) {
    choice = choice.concat(uppercase);
  }
  
  // Numeric only
  if (optionN === true) {
    choice = choice.concat(numeric);
  }
  
  // Special characters only
  if (optionSC === true) {
    choice = choice.concat(specialChara);
  }
    
  if (optionLC !== true && optionUC !== true && optionN !== true && optionSC !== true) {
    alert("Invalid selection, please try again.");
  }
  else {
    
  }

  var combo = [].concat(choice);

  var passPieces = [];
  for (i = 0; i <= passLength - 1; i++) {
    var index = Math.floor(Math.random() * combo.length);
    var digit = combo[index];
    console.log(digit);
    passPieces.push(digit);
  }
  var passcode = passPieces.join('');
  console.log(passcode);
  return passcode;

}


// function newFunction(passLength) {
//   parseInt(passLength);
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
