// Assignment code here

var passwordText = document.getElementById;("password");
var passwordFunction = {
  lower: getLowerRandom,
  upper: getUpperRandom,
  number: getNumberRandom,
  symbol: getSymbolRandom
}
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", ()=> {
  var length = prompt("length of desired password?");
 lenght =  parseInt(length)
  if(length<8 || length>128){
    window.alert("Please enter a number larger than 8 but smaller than 128")
   return
  } 
 console.log(length)
  var hasUpper = window.confirm("Are capitol letters required?");
  var hasLower = window.confirm("Are lower case letters required?");
  var hasSymbol = window.confirm("Are special characters required?");
  var hasNumber = window.confirm("Are numbers required?");
   console.log()
 passwordText = generatePassword(hasLower, hasUpper, hasSymbol, hasNumber, length)
 document.getElementById("password").placeholder=passwordText;
})


 function generatePassword(upper, lower, symbol, number, length){
var generatedPassword= '';
var typesLength = upper + lower + symbol + number;
console.log('typesLength', typesLength);

var typesArray = [{upper},{lower},{symbol},{number}].filter(item => Object.values(item)[0])
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

generatedPassword += passwordFunction[passName]();
 });
}
console.log(generatedPassword.slice(0,length))
var passwordText = generatedPassword.slice(0,length)
return passwordText
 }


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
  const symbols = '!#$&()*+,-./:;><?@[]^_`{}|~'
  return symbols[Math.floor(Math.random() * symbols.length)]
}
