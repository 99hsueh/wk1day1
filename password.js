function obfuscate(input){
  var output = "";
  for (var i = 0; i < input.length; i++) {
    if (input[i] === "a"){
      output += "4";
    }
    else if(input[i] === "e"){
      output += "3";
    }
    else if(input[i] === "o"){
      output += "0";
    }
    else if(input[i] === "l"){
      output += "1";
    }
    else {
      output += input[i];
    }
  }
  return output;
}

var argument = process.argv[2];

console.log(obfuscate(argument));