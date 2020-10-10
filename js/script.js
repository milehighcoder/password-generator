var generateBtn = document.querySelector("#generate");
var numChar = "0123456789";
var lowerABC = "abcdefghizjklmnopqrstuvwxyz";
var upperABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specChar = "!#$%&*@_";
var charArr = [];

// function starts
function generatePassword() {
  // passwordLength stores the value entered by the user
  var passwordLength = parseInt(
    prompt(
      "How many characters would you like your password to have? Choose a number that is within the range of 8 to 128 characters."
    )
  );

  // this 'if' statement returns an alert if the user enters a value that isn't within the specific range
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Invalid entry. Enter a value within the specified range.");
    return "";
  }

  // these variables store the values of the user's input
  var confirmNum = confirm("Do you want numbers in your password?");
  var confirmLowerCase = confirm(
    "Do you want lowercase characters in your password?"
  );
  var confirmUpperCase = confirm(
    "Do you want uppercase characters in your password?"
  );
  var confirmSpecChar = confirm(
    "Do you want special characters in your password?"
  );

  // if 'true' the app will concatenate numChar and charArr into a new array
  if (confirmNum === true) {
    var conOne = charArr.concat(numChar);
    // if 'false' then the app will concatenate charArr with an empty 'conOne' array into a new array
  } else {
    var conOne = charArr.concat();
  }

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

  if (confirmNum != true && confirmLowerCase != true && confirmUpperCase != true && confirmSpecChar != true) {
    alert('Must select at least one character type.');
  }

  var conFourString = conFour.toString();

  var result = "";

  // takes the length of the
  for (i = 0; i < passwordLength; i++) {
    var randomPassword = conFourString.charAt(
      Math.floor(Math.random() * conFourString.length)
    );
    console.log(randomPassword);
    var result = randomPassword.concat(result);
    console.log(result);
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
