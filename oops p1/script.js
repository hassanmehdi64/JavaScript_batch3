// const user = {
//     username: "abc",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         //console.log("Got user details from database");
//         console.log(`Username: ${this.username}`);
//         console.log(this);
//     }

// }



// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);



// ==================Constructor function=========================

function user(username, loginCount, isLoggedIn){
         this.username = username;
         this.loginCount = loginCount;
         this.isLoggedIn = isLoggedIn


    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    // return this
}

const userOne = new user('Asheel', 3, true)
const useTwo = new user('Naveed', 5, true)

console.log(userOne);
console.log(useTwo);

