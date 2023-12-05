// -----------This KeyWord------------

const user = {
    username: "Hassan",
    price :999,

    welcomeMessage: function() {
       
        console.log(`${user.username}, Welcome to WEBSITE`);  //This Keyword used to refer currrent Context
        // console.log(this);
    }

}


// user.welcomeMessage()
//if we change the user name
user.username = "Naveed"
// user.welcomeMessage()

// console.log(this);




//---------------- This in Function-----------

// function thisinFunc() {
    
//     let username = "Ajmal"
// console.log(this);
// console.log(this.username);

// }

// thisinFunc()





    //---------------- Arrow Function-----------
// As we have learnt in previous lecture we can declare a function by storing it in a variabel

    // const hello = function(){
    //     let username = "Hassan"
    //     console.log(this.username)
    // }
    // hello()


// this in Arrow Func

// const hello = () =>{
//         let username = "Hassan"
//         console.log(this.username)
//     }
//     hello()

    

    // passing arguments
//-----Explicit Return---
//     const addtwo = (num1, num2) => {

//   return num1 + num2


//     }


// console.log( addtwo(22, 3))





//----SECOND WAY--Implicit Return---

// In this method you do not need to use parenthesis and add expression in same first Line also remove return KeyWord'

   const addtwo = (num1, num2) =>  num1 + num2

//     console.log( addtwo(22, 3))

// const addtwo = (num1, num2) => (num1 + num2)   // same as above
// console.log(addtwo(22, 3))
// This way is used for only single Expression
    



//------------WE can Pass Object --------------
// we can use object with using {}

const addtwo = () => ({username: "Hassan"}) 
     
console.log(addtwo())