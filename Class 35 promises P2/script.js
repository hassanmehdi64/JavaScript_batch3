
// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username: "abc", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

// promiseFour
//  .then((user) => {
//     // console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected"))


// ----------------------------------------------------

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

