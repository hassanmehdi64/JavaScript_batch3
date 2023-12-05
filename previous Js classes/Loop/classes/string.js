// let firstname = "Ajmal";
// let lastname = "Ali";

// String Concatination
//console.log( "My name is " + firstname + " " + lastname); //old

// concat using Backtiks
// console.log(`my name is ${firstname} ${lastname}. `);

// String Methods
//usage of new keyword
// console.log(gameName);

//console.log(gameName.length);

// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());

//const  arr = ['ajmal', 'Naveed' , 'Asheel']

//console.log(arr.charAt(2))

//console.log(gameName.charAt(5));  //to fnd the postion of any character

//console.log(gameName.indexOf('a')); //to find the index of any character



// const gameName = "GameChanger"

// const newString =  gameName.substring(0, 4); //to divide any string to substring
// console.log(newString);




// -------------------------------------------------------
//const gameName = "GameChanger"
//const anotherString = gameName.slice(2 , -1);  //to divie any string to substring
//console.log(anotherString);

//const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(0, -2));
// Expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
//console.log(animals.slice(2, -1));


// Trim: The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.

const newStringOne = "  Hassan  "; //without using trim
console.log(newStringOne);

console.log(newStringOne.trim()); // using trim



const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// Expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

console.log(p.replace(/lazy/g, 'cat'));
// Expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"



