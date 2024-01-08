 7// In JavaScript, the fetch function is used to make network requests (e.g., fetching data from an API) and handle responses asynchronously. It is a modern alternative to older methods like XMLHttpRequest and provides a simpler, more powerful interface.


//------------------------------------------------------------------
// formats => ajax, json etc


let url1 = 'https://jsonplaceholder.typicode.com/users'

let mails = document.querySelector('#emails')

let getdata = async ()=>{

let response = await fetch(url1)
console.log(response);

let data = await response.json()
// console.log(data[0].email);  


// // ---------------usage of emails in html fles--


// let firstemail = mails.innerHTML = data[1].email
// console.log(firstemail);
data.forEach((val) => {
  console.log(val.email);

document.write( val.email, '<br>')

})
}





//   -----------------------------------------------------------------


// const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// fetch(apiUrl)
//   .then(response => response)
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));


  // ============================================================
  // let url = 'https://jsonplaceholder.typicode.com/todos/7'

  // let promises = fetch(url)
  
  // async function fetchData() {
  //   try {
  //     const response = await promises
      
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // }
  
  // // Call the async function
  // fetchData();
  