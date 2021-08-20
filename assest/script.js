const options={uppercase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ", lower:"abcdefghijklmnopqrstuvwxyz",numbers:"1234567890",symbol:"!@#$%^&*()_+=-{}[]:'./<>?"}

function writePassword(){
var upper=confirm("Do you want uppercase letters?");
var lower=confirm("do you want lowercase letters?");
var number=confirm("Do You want numbers?");
var symbol=confirm("Do you want symbol?")
var password=""
var length=prompt("how many characters do you want?")
var finalpassword=""
if (upper === true){
 password += options.uppercase
}
if(lower=== true){
  password += options.lower
}
if (number=== true){
password += options.numbers
}
if (symbol=== true){
  password += options.symbol
}
for (let i = 0; i < length; i++) {
  finalpassword += password
  [Math.floor(Math.random() * password.length)]
}
document.getElementById("password").innerHTML=finalpassword
  return finalpassword
} 

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
