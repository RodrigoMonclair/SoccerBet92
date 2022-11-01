const startScreen = document.getElementById("start-screen")
const title = document.getElementById("title-screen")
const namePlayers = document.getElementById("name-players")
const btnEnter = document.getElementById("btn-enter")
const gameScreen = document.querySelector("#game-screen")
const credits1 = document.getElementById("credits1")
const credits2 = document.getElementById("credits2")
const name1 = document.getElementById("name-player-one")
const name2 = document.getElementById("name-player-two")
const btnReady = document.getElementById("btn-go1")
const btnReady2 = document.getElementById("btn-go2")
const btnTeam1 = document.querySelectorAll(".btn-team1")
const btnTeam2 = document.querySelectorAll(".btn-team2")


let betAmount1 = 0;
let betAmount2 = 0;

const player1 = new Player()
const player2 = new Player()


btnEnter.addEventListener('click', ()=>{
    startScreen.className = "hide"
    gameScreen.className = "game-screen show"
    
    createPlayer()
})



function createPlayer(event){
   
   player1.name = document.getElementById("name-player1").value
   player2.name = document.getElementById("name-player2").value
   credits1.innerText = player1.creditos
   credits2.innerText = player2.creditos

   name1.innerText = player1.name
   name2.innerText = player2.name

   console.log(player1)
   console.log(player2) 
}

btnTeam1.forEach(btn => btn.addEventListener("click",()=> {
    console.log(btn.value)
    player1.getSelectedTeam1(btn.value)
    console.log(player1)
}))//{btn.addEventListener('click',player1.getSelectedTeam1)})


btnTeam2.forEach(btn2 => btn2.addEventListener("click", ()=> {
    console.log(btn2.value)
    player2.getSelectedTeam2(btn2.value)
    console.log(player2)


}))//{btn.addEventListener("click", player2.getSelectedTeam2)})


btnReady.addEventListener('click', ()=>{

    
    const score1 = document.getElementById("score-num1").value
    const score2 =  document.getElementById("score-num2").value
    betAmount1 = document.getElementById("bet-amount1").value

    player1.getScorePlayer1(score1, score2)
    btnReady2.disabled = false


    console.log(player1)
    console.log(betAmount1)
})

btnReady2.addEventListener("click", ()=>{
    const score1 = document.getElementById("score-num3").value
    const score2 = document.getElementById("score-num4").value
    betAmount2 = document.getElementById("bet-amount2").value
    

    player2.getScorePlayer2(score1,score2)
    console.log(player2)
    console.log(betAmount2)

    gameScreen.className = "hide"
})

