// Assignment code here
var increment = 0;

var Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var Lower = Upper.toLowerCase();
var Special = "'!@#$%^&*()']";
var Numbers = "0123456789";

var password = '';
var finalPass = '';


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generates the Password
function generatePassword() {

  var passLength = window.prompt("Please Enter A Number Between 8 - 128 For Your Password");
  passLength = parseInt(passLength);

  while (passLength < 8 || passLength > 128) {
    window.alert("The Number You Have Selected Is NOT Within The Range");
    var passLength = window.prompt("Please Enter A Number Between 8 - 128 For Your Password");
    passLength = parseInt(passLength);
  }

  var passUpper = window.confirm("Include Upper Case?");
  var passSpecial = window.confirm("Include Special Characters?");
  var passLower = window.confirm("Include Lower Case?");
  var passNumber = window.confirm("Include Numbers?");

  const inputMap = {
    passUpper: Upper,
    passSpecial: Special,
    passLower: Lower,
    passNumber: Numbers
  };

  for (var [key, value] of Object.entries(inputMap)) {

    if (passUpper) {
      password += Upper;
      passUpper = '';
    } else if (passSpecial) {
      password += Special;
      passSpecial = '';
    } else if (passLower) {
      password += Lower;
      passLower = '';
    } else if (passNumber) {
      password += Numbers;
      passNumber = '';
    }

  }

  increment = 0;
  finalPass = '';
  while (increment < passLength) {
    finalPass += password[Math.floor(Math.random() * password.length)];
    increment++;
  }

  return finalPass;
}
