
function phoneprice(...price1) {
    return price1
}

console.log(phoneprice(100,200,300,400));

function phoneprice(price1,price2,...price3) {
    return[price1,price2,price3]
}

console.log(phoneprice(500,600,700,800))


const player = {
    player:"naveed jaan",
    game:"pubg",
    level:70
}

function handle(pubg) {
    console.log(`user name is ${pubg.player} played game is ${pubg.game} and level is ${pubg.level}`);
}

handle(
    {
        player:"naveed",
        game:"pubg",
        level:70
    }
)

let arr = [200,300,400,500]
function arrvalue(getarr){
    return getarr[1]
}

console.log(arrvalue(arr))