// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// prompts the user to detemermine what kind of passwoord they want

function generatePassword(){
    var characterAmount = prompt("How many characters long would you like your password to be? Please enter number between 8 and 128")
    while((characterLimit < 8) (characterLimit > 128) (isNaN) (characterLimit)=== true)
    alert("Please choose a number between 8 and 128")
    characterAmount = prompt("How many characters long would you like your password to be? Please enter number between 8 and 128")
}

var chooseLower = confirm("Would you like lowercase letters in your password?")

var chooseUpper = confirm("Would you like uppercase letters in your password?")

var chooseNumber = confirm("Would you like numbers in your password?")

var chooseSpecialCharacter = confirm("Would you like special characters in your password?")

// all user choices for their password are listed here
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var specialChara ="!#$%&'()/?@[\]"
var charaBank = ""
var newPassword = ""

// user choices are held by if statements

if (chooseLower === true) {
    charaBank = charaBank.concat(lowercase)
}

if (chooseUpper === true) {
    charaBank = charaBank.concat(uppercase)
}

if (chooseNumber === true) {
    charaBank = charaBank.concat(numbers)
}

if (chooseSpecialCharacter === true) {
    charaBank = charaBank.concat(specialChara)
}

// allows functions to randomize

function randomize(max)







