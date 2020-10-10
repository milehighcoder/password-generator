var generateBtn = document.querySelector("#generate");

// declares variables for 'function generatePassword()'
var numChar = "0123456789";
var lowerABC = "abcdefghizjklmnopqrstuvwxyz";
var upperABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specChar = "!#$%&*@_";
var charArr = [];

// function starts
function generatePassword() {
  // passwordLength stores the value entered by the user
  var passwordLength = parseInt(prompt("How many characters would you like your password to have? Choose a number that is within the range of 8 to 128 characters."));
  // this 'if' statement returns an alert if the user enters a value that isn't within the specific range.
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Invalid entry. Enter a value within the specified range.");
    return "";
  }

  // these variables store boolean values in order to determine the character type preferences of the user
  var confirmNum = confirm("Do you want numbers in your password?");
  var confirmLowerCase = confirm("Do you want lowercase characters in your password?");
  var confirmUpperCase = confirm("Do you want uppercase characters in your password?");
  var confirmSpecChar = confirm("Do you want special characters in your password?");

  // start concatenation
  // if 'true' the app will concatenate charArr and numChar. If 'false' then the app will concatenate charArr with an empty string.
  if (confirmNum === true) {
    var conOne = charArr.concat(numChar);
  } else {
    var conOne = charArr.concat();
  }

  // IMPORTANT: the concatenation process above (lines 28-32) is repeated for lines 35 to 51 in order to stack the user's character type preferences into one final array (conFour) for the 'for loop'
  if (confirmLowerCase === true) {
    var conTwo = conOne.concat(lowerABC);
  } else {
    var conTwo = conOne.concat();
  }

  if (confirmUpperCase === true) {
    var conThree = conTwo.concat(upperABC);
  } else {
    var conThree = conTwo.concat();
  }

  if (confirmSpecChar === true) {
    var conFour = (conFour = conThree.concat(specChar));
  } else {
    var conFour = (conFour = conThree.concat());
  }
  // end concatenation

  // this 'if' statement validates that at least one character type was selected by the user
  if (confirmNum != true && confirmLowerCase != true && confirmUpperCase != true && confirmSpecChar != true) {
    alert("Invalid preferences. Please select at least one character type.");
  }

  // changes the conFour array into a string
  var conFourString = conFour.toString();
  // assigns an empty value to 'result' so that a random value can be returned to it
  var result = "";

  // this for loop allows us to access the password length preference set by the user
  for (i = 0; i < passwordLength; i++) {
    // generates random characters in the amount of passwordLength
    var randomPassword = conFourString.charAt(Math.floor(Math.random() * conFourString.length));
    // concatenates the random characters generated in line 66 into a string
    var result = randomPassword.concat(result);
  }
  
  return result;

}
// function end

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
