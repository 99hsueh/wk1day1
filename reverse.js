function reverse(strs){
  strs.forEach(function(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--){
    newString += str[i];
  }
  return console.log(newString);
  })
}
argument = process.argv.slice(2);

(reverse(argument));