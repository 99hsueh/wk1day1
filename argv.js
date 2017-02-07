/*straight forward, next object goes to next line*/
//console.log(process.argv);

/*process.argv(2)starts from array[2] as 0 is for pathfile and 1 is for pathfile js
changes array[0] to 'String', adds comma and keeps objects on one line*/
var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

/* switches myArgs if string matches
to console.log accordingly, 2nd array will be whatver inputed*/
 switch (myArgs[0]) {
   case 'insult':
     console.log(myArgs[1], 'smells quite badly.');
     break;
   case 'compliment':
     console.log(myArgs[1], 'is really cool.');
     break;
   default:
     console.log('Sorry, that is not something I know how to do.');
 }