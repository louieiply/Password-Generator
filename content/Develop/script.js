// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var fg ={num:"bb"};
  console.log(typeof(fg));
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


}
function generatePassword(){
  var comfirmed = false;
  var length = 0;
  alert("Following Password criteria:\n-Special Chararcters\n-Uppercase letters\n-Lowercase letters\n-numric letters");
  while(!comfirmed){
    var symbols = confirm("Password include Special Characters?"); 
    var upper = confirm("Password include Uppercase letters ?");
    var lower = confirm("Password include Lowercase letters ?");
    var numric = confirm("Password include numric letters ?");
    if(length === 0){
      while(length < 8 || length > 128){
        length = prompt("Desired Password length (8-128 characters)");
        if(length < 8 || length > 128){
          alert("Entered Password length does not satisfy requirement!");
        }
      }
    }
    var text = "Do you confirm the following list of requirements:\n-Symbols: "+ symbols +"\n-Uppercase Letter: " + upper + "\n-Lowercase Letter: " +lower+ "\n-Numric: "+numric;
    confirmed = confirm(text);
  }

}

function filter(symbols,upper,lower,numric){
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
