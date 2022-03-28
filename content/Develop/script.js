// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


}
//Generate password
function generatePassword(){
  var password = "";
  var confirmed = false;
  var length = 0;
  alert("Following Password criteria:\n-Special Chararcters\n-Uppercase letters\n-Lowercase letters\n-numric letters");
  //Check password criteria until requirement has met
  while(!confirmed){
    var condition = false;
    var options = new Map();
    //get selected criteria
    var symbols = confirm("Password include Special Characters?"); 
    options.set("symbols",symbols);
    var upper = confirm("Password include Uppercase letters ?");
    options.set("upper",upper);
    var lower = confirm("Password include Lowercase letters ?");
    options.set("lower",lower);
    var numric = confirm("Password include numric letters ?");
    options.set("numric",numric);
    //check password length
    if(length === 0){
      while(length < 8 || length > 128){
        length = prompt("Desired Password length (8-128 characters)");
        if(length < 8 || length > 128){
          alert("Entered Password length does not satisfy requirement!");
        }
      }
    }
    //check criteria needed at least 1 selected
    options.forEach(option => {
      if(option === true){
        condition = true;
        return;
      }
    });
    //if yes set text to html element
    if(condition){
      var text = "Do you confirm the following list of requirements:\n-Symbols: "+ symbols +"\n-Uppercase Letter: " + upper + "\n-Lowercase Letter: " +lower+ "\n-Numric: "+numric;
      confirmed = confirm(text);
    }
    //if not alert pop up
    else{
      alert("Please choose at least one of the Password criteria.");
    }
  }
  //store chosen criteria in array
  var chosen_criteria = new Array();
  options.forEach (function(value, key) {
    if(value === true){
      chosen_criteria.push(key);
    }
  })
  //Password Generate process
  for(i = 0; i < length; i++){
    //randomise array index
    var index = Math.floor((Math.random() * (chosen_criteria.length)));
    //get randomised criteria from array
    var item = chosen_criteria[index];
    console.log(item);
    switch (item) {
      case "symbols":
        //special character selected
        //33,35,36,37,38,42,64,94 charcode
        var ran = Math.floor(Math.random() * 8);
        if(ran === 0 ){
          ran = 33;
        }
        else if(ran == 5){

          ran = 42;
        }
        else if(ran == 6){
          
          ran = 64;
        }
        else{
          ran = ran == 7 ? 94 : ran + 34;
        }
        password +=  String.fromCharCode(ran);
        break;
      case "upper":
        //uppercase letter selected
        //65-90 charcode
        var ran = Math.floor(Math.random() * 26) + 65;
        password +=  String.fromCharCode(ran);
        break;
      case "lower":
        //lowercase letter selected
        //97-122 charcode
        var ran = Math.floor(Math.random() * 26) + 97;
        password +=  String.fromCharCode(ran);
        break;
      case "numric":
        //numric letter selected
        //48-57 charcode
        var ran = Math.floor(Math.random() * 10) + 48;
        password +=  String.fromCharCode(ran);
        break;
    }
    
  }
  //return password
  return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
