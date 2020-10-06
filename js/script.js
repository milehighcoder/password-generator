// variables declared

var generateBtn = document.querySelector("#generate");

// PASSWORD INPUT VARIABLES
// numeric characters
var numChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// alphabetical characters
var abcChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// special characters
var specChar = ["!", "#", "$", "%", "&", "*", "@"];

// Prompt that displays in viewport after the user has clicked 'Generate Password'
function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password to have? Please choose a range of 8 to 128 characters.");
  var confirmNum = confirm('Do you want numbers in your password?');
  var confirmLowerCase = confirm('Do you want lowercase characters in your password?');
  var confirmUpperCase = confirm('Do you want uppercase characters in your password?');
  var confirmSpecChar = confirm('Do you want special characters in your password?');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
