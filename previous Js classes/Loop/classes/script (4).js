// ARRAY

let arr1 = [0,1,2,3,4,5,6]
// console.log(typeof arr1[7])


const arr2 = new Array("one", "Two", "Three", "Four")


// __________MEHODS_______________
//pUSH
// arr2.push("Five", "Six", "Seven");

// pop
// arr2.pop( "Six", "Seven");


//unshift
// arr2.unshift("Ajmal");

//shift
// arr2.shift()
// console.log(arr2)


/////////////Ask Questions//////

//--Includes
// console.log(arr1.includes(3))

//--IndexOf
// console.log(arr1.indexOf(4))

//--.Join
// const newArr = arr1.join()
// console.log(newArr)

// console.log(newArr)


//Slice and Splice

// const myna = arr1.slice(1, 3)
// console.log("B",  myna)
// console.log("A", arr1)



//Splice

// const myna2 = arr1.splice(1, 3)
// console.log("C", arr1)  
// Splice manupulate original Array
// console.log(myna2)


// ..................................More Methods.............
// Array 1
const fruits = ["Apple", "Banana", "Orange", "Grapes", "Strawberry"];

// Array 2
const colors = ["Red", "Blue", "Green", "Yellow", "Purple"];

// Push Method
// fruits.push(colors)
// console.log(fruits[5][2])


//Concat method
const newC = fruits.concat(colors)
console.log(newC)