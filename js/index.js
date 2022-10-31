const startScreen = document.getElementById("start-screen")
const title = document.getElementById("title-screen")
const namePlayers = document.getElementById("name-players")
const btnEnter = document.getElementById("btn-enter")
const gameScreen = document.querySelector("#game-screen")
const credits1 = document.getElementById("credits1")
const credits2 = document.getElementById("credits2")
const name1 = document.getElementById("name-player-one")
const name2 = document.getElementById("name-player-two")
const name = document.getElementById("name-player")


btnEnter.addEventListener('click', ()=>{
    startScreen.className = "hide"
    gameScreen.className = "game-screen show"
    
    createPlayer()
})


function createPlayer(event){
   let namePlayer1 = document.getElementById("name-player1").value
   let namePlayer2 = document.getElementById("name-player2").value

   const player1 = new Player(namePlayer1)
   const player2 = new Player(namePlayer2)

   credits1.innerText = player1.creditos
   credits2.innerText = player2.creditos

   name1.innerText = player1.name
   name2.innerText = player2.name

   console.log(player1)
   console.log(player2) 
}


const scorePlayer1 = [];
const scorePlayer2 = [];