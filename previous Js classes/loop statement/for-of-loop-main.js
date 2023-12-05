//  LOOPS (Array Loops)

//For OF


// for (const iterator of object) {
    
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// for (const num of arr) {
//     console.log(num);
    
// }






// ======Example 2=======

// let greetings = "Hello World!"

// for (const greet of greetings) {

//     console.log(`Each character is ${greet}`);
    
// }





// =========== MAPS ++++++++++
//map is an object itself

const map = new Map()

map.set('PK', 'Pakistan')
map.set('GB', "Gilgit Baltistan")
map.set('FR', 'France')

// console.log(map);

//Can we Add Loop on it?

// for (const key of map) {
//     console.log(key);
// }

//To print keys and values we can use
// for (const [key, values] of map) {
//     console.log(key, ":" ,  values);
// }





// ============================= Can We use For Of Loop in Object ? ===============

const myObject = {
    "game1": "NFS",
    "game2": "PUBG"

}

// for (const value of myObject) {
//     console.log(key);
// }





for (const [key, values] of myObject) {
    console.log(key, ":" ,  values);
}

//ForOf Loop is not applicable in object