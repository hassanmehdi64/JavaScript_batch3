

// ***************
//   to string
// *************

const numb =  Number(200);

console.log(numb.toString());

console.log(typeof numb);



// ***************
//   to fixed
// *************

let arr =  new Number(100)

console.log(arr.toFixed(14));

console.log(typeof arr)


// ***************
//   precession
// *************
let prec = Number(130);
console.log(prec.toPrecision(5));



// ***************
//to local string
// *************

let str = Number(300);
console.log(str.toLocaleString("PK"));



// ************************************************
        //    MATHS
// ***************************************************

// ********************
//   ABS
// *********************

let maths = [ 50,30,40,80,70];
console.table(maths);
console.log(Math.abs(3));

// ********************
//   round
// *********************

console.log(Math.round(4.5));

// ********************
//   ceil
// *********************

console.log(Math.ceil(4.2));


// ********************
//   floor
// *********************

console.log(Math.floor(4.8));


// ********************
//   Min
// *********************

console.log(Math.min(2,4,6,8));


// ********************
//   Max
// *********************

console.log(Math.max(2,4,6,8));



// ********************
//   Random
// *********************

console.log(Math.random());

console.log(Math.random()*10 + 1);


// **************************************************
        //  DATES
//   **************************************************

let nowdate = new Date()

console.log(nowdate);
console.log(nowdate.toString());
console.log(nowdate.toDateString());
console.log(nowdate.toLocaleString());
console.log(nowdate.toLocaleDateString());


const createddate =  new Date(10,8,2023);
console.log (createddate.toDateString());