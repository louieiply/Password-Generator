// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


}
function generatePassword(){
  var confirmed = false;
  var length = 0;
  alert("Following Password criteria:\n-Special Chararcters\n-Uppercase letters\n-Lowercase letters\n-numric letters");
  while(!confirmed){
    var condition = false;
    var options = new Map(); 
    var symbols = confirm("Password include Special Characters?"); 
    options.set("symbols",symbols);
    var upper = confirm("Password include Uppercase letters ?");
    options.set("upper",upper);
    var lower = confirm("Password include Lowercase letters ?");
    options.set("lower",lower);
    var numric = confirm("Password include numric letters ?");
    options.set("numric",numric);
    if(length === 0){
      while(length < 8 || length > 128){
        length = prompt("Desired Password length (8-128 characters)");
        if(length < 8 || length > 128){
          alert("Entered Password length does not satisfy requirement!");
        }
      }
    }
    options.forEach(option => {
      if(option === true){
        condition = true;
        return;
      }
    });
    if(condition){
      var text = "Do you confirm the following list of requirements:\n-Symbols: "+ symbols +"\n-Uppercase Letter: " + upper + "\n-Lowercase Letter: " +lower+ "\n-Numric: "+numric;
      confirmed = confirm(text);
    }
    else{
      alert("Please choose at least one of the Password criteria.");
    }
  }
  c

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
