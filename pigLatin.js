var argument = process.argv.slice(2);
var pigLatin = [];

for (var i = 0; i < argument.length; i++) {
  pigLatin += translator(argument[i]);
}

function translator(word){
return word.slice(1, word.length) + word[0] + "ay ";
}

console.log(pigLatin);
