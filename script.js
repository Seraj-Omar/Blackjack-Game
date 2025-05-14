let player = {
    name: "Burger",
    chips: 200
}

let cardEl=document.getElementById("cards-el");
let sumEl=document.getElementById("sum-el");
let stateEl=document.getElementById("curr-state-el");
let chipsEl=document.getElementById("chips-el");

let states=["Want to draw a new card?","Blackjack !!","You are out !"]

let cards=[]
let sum=0

let canDraw
let blackjack

chipsEl.textContent = player.name + ": $" + player.chips

function rand(){
    return Math.floor(Math.random()*(10))+2
}

function startGame(){
    cards=[rand() , rand()]
    sum=cards[0]+cards[1]
    canDraw=true;
    blackjack=false;
    renderGame()
}


function renderGame(){
    if(sum<21)
        stateEl.innerText=states[0]
    else if(sum===21){
        stateEl.innerText=states[1]
        blackjack=true;
    }
    else{
        stateEl.innerText=states[2]
        canDraw=false;
    }
    cardEl.innerText="Cards : "+cards
    sumEl.innerText="Sum : "+sum
}

function drawCard(){
    if((!blackjack)&&canDraw){
        cards.push(rand())
        sum+=cards[cards.length-1]
        renderGame()
    }
}