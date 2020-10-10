
// these variables store the initial application values that we will pull from late for the 'for loop'
var generateBtn = document.querySelector("#generate");
var numChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerABC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperABC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specChar = ["!", "#", "$", "%", "&", "*", "@", "_"];
var charArr = [];

// function starts
function generatePassword() {

  // passwordLength stores the value entered by the user
  var passwordLength = parseInt(prompt("How many characters would you like your password to have? Choose a number that is within the range of 8 to 128 characters."));
  console.log(passwordLength);

  // this 'if' statement returns an alert if the user enters a value that isn't within the specific range
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid entry. Enter a value within the specified range.");
    return "";
  }

  // these variables store the values of the user's input
  var confirmNum = confirm("Do you want numbers in your password?");
  var confirmLowerCase = confirm("Do you want lowercase characters in your password?");
  var confirmUpperCase = confirm("Do you want uppercase characters in your password?");
  var confirmSpecChar = confirm("Do you want special characters in your password?");

  // if 'true' the app will concatenate numChar and charArr into a new array
  if (confirmNum === true){
    var conOne = charArr.concat(numChar);
    // if 'false' then the app will concatenate charArr with an empty 'conOne' array into a new array
  } else {
    var conOne = charArr.concat();
  }

  if (confirmLowerCase === true){
    var conTwo = conOne.concat(lowerABC);
  } else {
    var conTwo = conOne.concat();
  }

  if (confirmUpperCase === true){
    var conThree = conTwo.concat(upperABC);
  } else {
    var conThree = conTwo.concat();
  }

  if (confirmSpecChar === true){
    var conFour = conFour = conThree.concat(specChar);
  } else {
    var conFour = conFour = conThree.concat();
  }
  console.log(conFour)

  var conFourString = conFour.toString();
  console.log(conFourString);

  for (i = 0; i < passwordLength; i++) {
    var randomPassword = conFourString.charAt(Math.floor(Math.random() * conFourString.length));
    console.log(randomPassword)
  }

}
// function end

/* NEXT STEPS: Pick out the random characters according to the password length requirement.
Then display the result on the viewport for the user to see. You can use random.generator to 
pick out the random characters. Use 'for (i = 0; i < passwordLength; i++)' to pick out the 
exact password length. We will need to use 'math.random()' and to complete the rest of the 
application. 
*/

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);