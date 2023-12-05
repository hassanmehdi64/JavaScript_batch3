//Global and Local Scope


let a = 12
const b =23
var c = 30



if(true) {
    
    // let a = 12
    // const b =23
    // var c = 30

    // console.log(a);
    // console.log(b);
    // console.log(c);
}








// function one() {
    
// const username = "hassan"
// // console.log(username)
   

// function two() {

//     const website = "3beez"

    
// }
// console.log(website)

// two()
// }
// one()






// Scope in if else Condition

if (true) {
    
const username = "Ajmal"

if(username === "Ajmal"){

    const website = "3beez"
    console.log(username + website);

}
console.log(username);


// console.log(website);
}






// ___________Example______________

function addone(num) {

    return num + 1
    
}

addone(5);



// another way to make function access  before declaration

const addtwo = function(numtwo) {
    
return numtwo + 1

}


addtwo(5)





// Task 
// What is Hoisting