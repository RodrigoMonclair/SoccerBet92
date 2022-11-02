let betAmount1 = 0;
let betAmount2 = 0;

const player1 = new Player()
const player2 = new Player()


const startScreen = document.getElementById("start-screen")
const title = document.getElementById("title-screen")
const namePlayers = document.getElementById("name-players")
const btnEnter = document.getElementById("btn-enter")
const gameScreen = document.getElementById("game-screen")
const credits1 = document.getElementById("credits1")
const credits2 = document.getElementById("credits2")
const name1 = document.getElementById("name-player-one")
const name2 = document.getElementById("name-player-two")
const btnReady = document.getElementById("btn-go1")
const btnReady2 = document.getElementById("btn-go2")
const btnTeam1 = document.querySelectorAll(".btn-team1")
const btnTeam2 = document.querySelectorAll(".btn-team2")
const player1Side = document.querySelector(".player1-side")
const player2side = document.querySelector(".player2-side")
const game = document.getElementById("game")
const team1 = document.getElementById("team1")
const team2 = document.getElementById("team2")
const score1 = document.getElementById("scr1")
const score2 = document.getElementById("scr2")
const victorious =  document.getElementById("victorious")
const vicTeam = document.getElementById("vic-team")
const draw = document.getElementById("draw")
const btnAgain = document.getElementById("btn-again")

console.log(btnEnter)
console.log(startScreen)


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
    console.log(btn)
    player1.getSelectedTeam1(btn)
    console.log(player1)
}))


btnTeam2.forEach(btn2 => btn2.addEventListener("click", ()=> {
    console.log(btn2)
    player2.getSelectedTeam2(btn2)
    console.log(player2)


}))
btnReady.addEventListener('click', ()=>{

    
    // const score1 = document.getElementById("score-num1").value
    // const score2 =  document.getElementById("score-num2").value
    betAmount1 = document.getElementById("bet-amount1").value

    // player1.getScorePlayer1(score1, score2)
    btnReady2.disabled = false


    console.log(player1)
    console.log(betAmount1)
})

btnReady2.addEventListener("click", ()=>{
    // const score1 = document.getElementById("score-num3").value
    // const score2 = document.getElementById("score-num4").value
    betAmount2 = document.getElementById("bet-amount2").value
    

    // player2.getScorePlayer2(score1,score2)
    console.log(player2)
    console.log(betAmount2)

    player1Side.className = "hide"
    player2side.className = "hide" 
    game.className = "game-start show"
    
    team1.src = player1.player1SelectedTeam.src
    team2.src = player2.player2SelectedTeam.src
    player1.startScore()
    score1.innerText = player1.computedScore[0]
    score2.innerText = player1.computedScore[1]
    
    if(player1.computedScore[0]>player1.computedScore[1]){
        game.className = "hide"
        victorious.className = "show"
        vicTeam.src = player1.player1SelectedTeam.src
        player1.creditos += betAmount1
        player2.creditos -= betAmount2
    }

    if(player1.computedScore[1]>player1.computedScore[0]){
        game.className = "hide"
        victorious.className = "show"
        vicTeam.src = player2.player2SelectedTeam.src
        player2.creditos += betAmount2
        player1.creditos -= betAmount1
    }

    if(player1.computedScore[1]===player1.computedScore[0]){
        game.className = "hide"
        draw.className = "show draw"
        player2.creditos -= (betAmount2*0.5)
        player1.creditos -= (betAmount1*0.5)    
    }
})

btnAgain.addEventListener("click", ()=>{
    victorious.className = "hide"
    draw.className = "hide"
    player1Side.className = "player1-side"
    player2side.className = "player2-side"
})



