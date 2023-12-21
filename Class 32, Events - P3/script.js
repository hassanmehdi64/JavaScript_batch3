
// ================= Events Properties =======================

// we can pass a parameter to access the properties using that object

const eventprops = document.getElementById('box-4')
eventprops.addEventListener('click', (e) => {
    
console.log(e); 


console.log(e.type);
console.log(e.target);
console.log(e.clientX, e.clientY);

})




