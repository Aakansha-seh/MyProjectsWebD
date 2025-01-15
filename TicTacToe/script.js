console.log("Welcome to TicTacToe")

let music = new Audio("music.mp3");
let mark = new Audio("ting.mp3");
let gameOver = new Audio("gameOver.mp3");
let turn = "X";
let gameover = false;


//function to change the turn
const changeTurn = ()=>{
    return turn==="X"?"O":"X"
}


//Function to check win
const checkWin = () => {

    let boxtexts = document.getElementsByClassName("boxtext");

    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    wins.forEach(e=>{
        if( (boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")) {

            document.querySelector(".info").innerText = boxtexts[e[0]].innerText + " won...";

            gameover = true ;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";

        }
    })
}


//Game Logic
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element=>{
    let boxtexts = element.querySelector(".boxtext");

    element.addEventListener('click', ()=>{
        if(boxtexts.innerText===''){
            boxtexts.innerText = turn;
            mark.play();
            turn = changeTurn();
            checkWin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn
            }
        }
    })
})

// add onclick listener to  reset button
reset.addEventListener("click", ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    });
    turn = "X"
    gameover=false;
    document.getElementsByClassName('info')[0].innerText="Turn for "+turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width=0;
})