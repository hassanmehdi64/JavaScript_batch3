if (30 == 40) {
    console.log (`code is running`);
}

else {
    console.log(`code is not running`)
}


const marks = 500;

if (marks<400) {
    console.log(`marks is good`)
}
else{
    console.log(`marks is not good`);
}


// Shorhand Notation

const students = 200;

if(students >150) console.log(`students are regular `);

// +++++++++++++++++++++ if Else if ++++++++++++++++++++++++++++++++


let players = 2000;

if (players<1000) {
    console.log(`players are good`)
}

else if (players <1200) {
    console.log(`players are  very good`);
}

else if (players <1500) {
    console.log(`players are perfect`);
}

else {
console.log(`player are hired`);
}



// --------------Logical Operators-----------------------------
// ======AND Operator=====

const played = true
const game = true

if (played && game) {
    console.log(`player is playing game`)
}


// ======OR Operator=====
const signedup = true
const shopping = false

if ( signedup || shopping) {
    console.log(`he is able to shooping`);
}

