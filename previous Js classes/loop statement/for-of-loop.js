
const ary = ["A","B","C","D","E","F","G"]

for (const value of ary) {
    console.log(value);
}


let coding = "naveed jaan"

for (let value of coding) {
    console.log(value);
}


// @@@@@@@@@@@@@@@@@@@@@@ MAPS @@@@@@@@@@@@@@@@

const map = new Map()

map.set('PK', 'Pakistan')
map.set('GB', "Gilgit Baltistan")
map.set('FR', 'France')

// console.log(map);

//Can we Add Loop on it?

// for (const key of map) {
//     console.log(key);
// }

// To print keys and values we can use
for (const [key, values] of map) {
    console.log(key, ":" ,  values);
}
