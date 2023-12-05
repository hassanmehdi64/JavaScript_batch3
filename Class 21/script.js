 //for off Loop

//  const arr = [1,2,3,4,5,6]

//  for (const num of arr) {

//     console.log(`Value of Arr is ${num}`);
    
//  }



//  ================== String Example ================
// const greetings = "Hello World";

// for (const greet of greetings) {
    
// console.log(`Each Char is ${greet}`);




// ========================+ ==MAPS== +============================
const map = new Map();

map.set('PK', 'Pakistan')
map.set('USA', 'United States of America')
map.set('FR', 'France')


// console.log(map);

for (const [keys, values] of map) {
    
console.log(`${keys} and values are ${values}`);

}



// --------------------------In Object----------------------













// ===============++++++++++ ForIn Loop +++++++++===========

const myObje = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    Swift: 'Swift by Apple'
}

for (const key in myObje) {
  
// console.log(keys);

// console.log(`${key} Value is: ${myObje[key]}`);

}






// ===============++++++++++ ForIn Loop with Arrays +++++++++===========

const programing = [ 'js', 'cpp', ' rb', ' Swift']

for (const key in programing) {
  
console.log(programing[key]);

}