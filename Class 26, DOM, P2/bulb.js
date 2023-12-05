let bulb = document.querySelector(".bulb")
let btn = document.querySelector("button")



let onoff = 0; 

btn.addEventListener('click', function(){

if (onoff == 0) {
    bulb.style.backgroundColor = 'yellow'
    btn.innerHTML = "OFF"

    console.log("Clickoid");
    onoff = 1
}else{
    bulb.style.backgroundColor = 'transparent'
    btn.innerHTML = "ON"

    console.log("Clickoid Again");
    onoff = 0
}

})