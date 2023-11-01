let sum = 0
let player ={
    name : "Aditya",
    chips: "100 $"
}
let cards=[]
let hasBlackJack = false
let exceed=false
let isAlive = false
let message = ""
let sumEl=document.getElementById("sum-el")
let msgEl=document.getElementById("msg-el")
let cardsEl=document.querySelector("#cards-el")
let playerEl=document.getElementById("playerdata")
// console.log(player.name)
playerEl.textContent = player.name + ": "  + player.chips
function startGame(){
    if(isAlive || exceed || hasBlackJack){
        msgEl.textContent="The game has started"
    }
    else{
        isAlive=true
        let firstcard=getRandomCard()
        let secondcard=getRandomCard()
        sum=firstcard+secondcard
        cards.push(firstcard)
        cards.push(secondcard)
        renderGame();
    }
}
function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" "
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
        exceed = true
    }
    console.log(message)
    sumEl.textContent= "Sum: "+sum
    msgEl.textContent=message
}
function newcard(){
    // console.log("New card")
    if(hasBlackJack===false && isAlive)
    {
        let cardvar=getRandomCard()
        cards.push(cardvar)
        sum+=cardvar
        renderGame();
    }
    else if(isAlive === false && exceed ==false){
        msgEl.textContent="Start the Game before drawing a Card!"
    }
    else{
        msgEl.textContent="Can't Draw anymore Cards!"
    }
}

function getRandomCard(){
    let num= Math.floor(Math.random()*13) + 1
    if(num===1)num=11
    else if(num>=10)num=10
    return num
}

function sagain(){
    if(sum<21){}
    else{
        location.reload()
    }
}