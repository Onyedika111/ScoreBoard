let scoreEl = document.getElementById("scoredBoard")
let scoreEl2 = document.getElementById("scoredBoard2")
let scoreLine = 0
let scoreLine2 = 0
let home = document.getElementById("hom")
let guest = document.getElementById("gues")





function add1(){
    scoreLine += 1
    scoreEl.innerText = scoreLine
}

function add2(){
    scoreLine += 2
    scoreEl.innerText = scoreLine
}

function add3(){
    scoreLine += 3
    scoreEl.innerText = scoreLine
}

function add12(){
    scoreLine2 += 1
    scoreEl2.innerText = scoreLine2
}

function add22(){
    scoreLine2 += 2
    scoreEl2.innerText = scoreLine2
    
}

function add32(){
    scoreLine2 += 3
    scoreEl2.innerText = scoreLine2
    if(scoreLine > scoreLine2){
        home.style.color = "red"
    }
    else if(scoreLine2 < scoreLine)
        {guest.style.color = "yellow"}
    else
    { guest.style.color = 'white'}
    home.style.color = 'white'
}

function resetFunc(){
    scoreLine = 0
    scoreLine2 = 0
    scoreEl.innerText = scoreLine
    scoreEl2.innerText = scoreLine2
}
