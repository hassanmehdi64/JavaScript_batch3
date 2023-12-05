// Controll Flow

// If Condition

// if (true) {
//     Code Executed
// }
// if (false) {
//     Code doesn't Executed
// }



//Checking Condition

// const isUserLoggedIn = true;

// if (isUserLoggedIn) {
    
// }

// Comprison Operators=>    <, >, <=, >=, ==, !=, ===, 


if (2 == '2') {
    // console.log(`Code Executed =`);
}


let temprature = 50
if (temprature < 30) {

    // console.log(`Temprature is Greter than 50`);
}else{

    // console.log(`Temprature is Less than 50`);
}



//Lets Talk about Scope

const score = 300

if (score> 100) {

    let power = "Fly"
    // console.log(`user Power: ${power}`)
    
}

// console.log(`User Power: ${power}`);








// =========================================================

// Shorhand Notation
const balance = 300

//if (balance > 500) console.log("number is less than 500");  //dont write more than one expresssion



// +++++++++++++++++++++ if Else if ==============

// if (balance <500) {
//     console.log('Less than 500') 

// }else if (balance < 750) {
//     console.log('less than 750');  

// }else if (balance <1000) {
//     console.log('less than 1000');
    
// }else{
//     console.log('less than 1200');
// }






// --------------Logical Operators-----------------------------
// +++++++++++++Example for multiple Condtionss==============


// const isUserLoggedIn = true
// const debitCard = false

const googleLoggedIn = false
const emailLoggedIn = true


// ======AND Operator=====

// if (isUserLoggedIn && debitCard) {
    
//         console.log("Allow to By Course")
    
// }



// ======OR Operator=====


// if (googleLoggedIn || emailLoggedIn ) {

//     console.log("user Logged In");
    
// }









// ++++++++++++++++ TRUE and FALSE VALUES +++++++++++++++++++

// -true is a true VAlue

// ==============example

// const userEmail = "hassan@gmail.com";


// if (!userEmail) {
    
// console.log("got user Email");

// }else{
//     console.log("Don't have User Email");
// }


// -----------------------------------------

// falsy values
// false, 0, -0, BigInt, 0n, "", null, undefined, NaN

// true values
//eg--> "0", "false", " ", [], {}, function(){}


// checking for empty array


// const userEmail = [];
// if (userEmail.length ===0) {
//     console.log('Array is Empty');
// }


// checking for empty object


const emptyObj = {};
if (Object.keys(emptyObj).length = 0) {
    console.log('Object is Empty');
}








// ========= Nullish Coalescing Operator (??): null  undefined
// let val1;
// val1 = 5 ?? 10;

// val1 = null ?? 10
// val1 = undefined ?? 15




// ====================Ternary Operator  (if else)=============

// condition ? true : false'
// ---------Example--------

// const teaPrice = 120;
// teaPrice <= 100 ? console.log("Less than 80") : console.log("More than 100");

