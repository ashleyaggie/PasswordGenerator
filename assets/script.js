// Assignment Code
var generateBtn = document.querySelector("#generate");

// Possible characters
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Removed space and backslash from the options below. Space was hard to see, and backslash was messing up the code.
var specialChara = ["!", "”", "#", "$", "%", "&", "’", "(", ")", "*", "+",
",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// Declares the array that will hold the user's selected types of characters.
var choice = [];

// Declares the array to hold each randomly selected character for the passcode before they are joined together.
var passPieces = [];

// Prompts after click

// Function to generate the password from the above arrays
function generatePassword() {

  // Asks user to enter preferred password length.
  var passLength = prompt("Please enter length of password - 8 to 128 characters.");

  // If the password length is not a number or is under or over the limit, the user will receive an error message and the alerts will close.
  if (passLength < 8 || passLength > 128) {
    console.log(typeof passLength);
    alert("Invalid selection, please try again.");
    return;
  } 

  // Asks the user yes or no if they want a certain type of character. If the user answers yes, it will add the type to the array. If not, nothing will happen and it will continue on.
  var optionLC = confirm("Does your password need lowercase letters?");
  
  var optionUC = confirm("Does your password need uppercase letters?");
  
  var optionN = confirm("Does your password need numbers?");
  
  var optionSC = confirm("Does your password need special characters?");

  // Lowercase
  if (optionLC === true) {
    choice = choice.concat(lowercase);
  }

  // Uppercase
  if (optionUC === true) {
    choice = choice.concat(uppercase);
  }
  
  // Numeric
  if (optionN === true) {
    choice = choice.concat(numeric);
  }
  
  // Special characters
  if (optionSC === true) {
    choice = choice.concat(specialChara);
  }
    
  // No types selected
  if (optionLC !== true && optionUC !== true && optionN !== true && optionSC !== true) {
    alert("Invalid selection, please try again.");
  }
  
  // Loop that randomly selects the characters from the choice array and adds them into a new array
  for (i = 0; i <= passLength - 1; i++) {
    var index = Math.floor(Math.random() * choice.length);
    var digit = choice[index];
    passPieces.push(digit);
  }

  // Combines the array into a string without separation and returns it on the page
  var passcode = passPieces.join('');
  return passcode;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
