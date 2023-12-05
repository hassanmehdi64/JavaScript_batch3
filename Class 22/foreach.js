const prgraming = [ 'js', 'cpp', ' rb', ' Swift', 'Java', 'python']




//Higher order function



// call back function


// prgraming.forEach( function ( item ){
//         console.log(`Every Value of array is: ${item}`);
// } );




// --------------Exampel par 3
//===arrow function

// prgraming.forEach( (value)=>{
//             console.log(`Every Value of array is: ${value}`);

// } )





// --------------Exampel par 3

// function printme(item) {
//     console.log(item);
// }
// we can pass functionin in foreach method as a parameter

// prgraming.forEach(printme);





// =================foreach havae multiple parameter access========

// prgraming.forEach( ( item, index, arr)=>{
//     console.log(item, index, arr);

// } )




// ===================Example 2====================
const programmingLanguages = [
   { languageName: "JavaScript", extensionName: ".js" },
   { languageName: "Java", extensionName: ".java" },
   { languageName: "HTML", extensionName: ".html" },
   { languageName: "Ruby", extensionName: ".rb" },
   { languageName: "C++", extensionName: ".cpp" },
];


programmingLanguages.forEach((item)=>{
    console.log(item.extensionName);
})