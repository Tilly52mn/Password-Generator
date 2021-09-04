// Assignment code here
var PasswordFunction ={
  lower: getLowerRandom,
  upper: getUpperRandom,
  number: getNumberRandom,
  symbol: getSymbolRandom
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function passwordChars() {

  var length = prompt("length of desired password?");
 lenght =  parseInt(length)
 console.log(length)
  var hasUpper = window.confirm("Are capitol letters required?");
  var hasLower = window.confirm("Are lower case letters required?");
  var hasSpecial = window.confirm("Are special characters required?");
  var hasNumber = window.confirm("Are numbers required?");
   console.log()
 var passwordText = generatePassword(hasLower, hasUpper, hasSpecial, hasNumber, length)
  
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");
 }

 function generatePassword(upper, lower, special, number, length){
var generatePassword= '';
var typesLength = upper + lower + special + number;
console.log('typesLength', typesLength);

var typesArray = [{upper},{lower},{special},{number}].filter(item => Object.values(item)[0])
console.log(typesArray)

if(typesLength === 0){
  return 'Please Try again and select requirments'
}
console.log(typesLength)
console.log(length)
for(let i =0; i < length; i+=typesLength){
  typesArray.forEach(type =>{
var  passName = Object.keys(type)[0];
console.log('passName', passName)

generatePassword += passwordFunction[passName]();   
  });
}
 }

//passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", passwordChars())


function getLowerRandom(){
  return String.fromCharCode((Math.floor(Math.random()*26+97)));
}
function getUpperRandom(){
  return String.fromCharCode((Math.floor(Math.random()*26+65)));
}
function getNumberRandom(){
  return String.fromCharCode((Math.floor(Math.random()*10+48)));
}

function getSymbolRandom(){
  const symbols = '!"#$&()*+,-./:;><?@[]^_`{}|~'
  return symbols[Math.floor(Math.random() * symbols.length)]
}