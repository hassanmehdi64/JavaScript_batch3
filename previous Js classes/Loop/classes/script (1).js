// const user = new Object()

const user = {}

user.name = "Hassan",
user.id = 222

// console.log(user)





// Object Nesting

const regularUser = {
    email: "abc@gmail.com",
    fullName: {
       userFullName:{
        userFirstName: "Hassan",
        userlastName: "Mehdi",
       }
    }  
}

// console.log(regularUser.email)
// console.log(regularUser.fullName.userFullName.userlastName)



// Assign Method
const object1 = {1:"One", 2:"Two", 3:"Three"}
const object2 = {4:"Four", 5:"Five", 6:"Six"}


// const object3 = {object1, object2} 

// const object3 = Object.assign(object1, object2)  //syntax1
// const object3 = Object.assign({}, object1, object2)  //syntax2

// Separator Method
// const object3 = {...object1, ...object2}  //syntax3

// console.log(object3)



// >>>>_____________>>>>>>>>>>>

const arrobj = [
    {
        Name: "Hassan",
        Email: "abc@gmail.com"
      },
  
      {
        Name: "Hassan",
        Email: "abc@gmail.com"
      },  
]


// console.log(arrobj[2].Name)

// To Find Keys and Values
console.log(Object.keys(regularUser))

console.log(Object.values(regularUser))

console.log(Object.entries(regularUser))

// hasOwnProperty method    
console.log(user.hasOwnProperty("name"))


