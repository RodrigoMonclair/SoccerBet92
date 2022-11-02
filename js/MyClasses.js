
class Player{

    constructor(name){
    this.name = name;
    this.creditos = 20;
    // this.player1Score = [];
    this.computedScore=[0,0];
    // this.computedSelectedTeam = [];
    // this.player2Score =[];
    this.player1SelectedTeam = 0;
    this.player2SelectedTeam = 0;
}


lostCredits(betAmount){
    this.creditos -= betAmount
}

earnCredits(betAmount){

    this.creditos += +betAmount

}

bothLostCredits(betAmount){
    this.creditos -= (betAmount*0.5)

}
// getScorePlayer1(score1,score2){
    
//     this.player1Score.push(score1)
//     this.player1Score.push(score2)
// }


// getScorePlayer2(score1,score2){
//     this.player2Score.push(score1)
//     this.player2Score.push(score2)
// }

getSelectedTeam1(team){
    this.player1SelectedTeam = team
}

getSelectedTeam2(team){
    this.player2SelectedTeam = team
}

startScore(){
    const score1 = document.getElementById("scr1");
    const score2 = document.getElementById("scr2");
    let rounds = 1;
    const intervalId = setInterval(() => {
      if (rounds === 9) {
        clearInterval(intervalId);
      }
      let teams = ["team1", "team2"];
      let selectTeam = teams[Math.round(Math.random())];
      let goals = ["goal", "ngoal"];
      let confirmGoal = goals[Math.round(Math.random())];
      if (selectTeam === "team1" && confirmGoal === "goal") {
        this.computedScore[0] += 1;
      }
      if (selectTeam === "team2" && confirmGoal === "goal") {
        this.computedScore[1] += 1;
      }
      console.log(player1.computedScore[0]);
      console.log(player1.computedScore[1]);
      score1.innerText = player1.computedScore[0];
      score2.innerText = player1.computedScore[1];
      rounds++;
    }, 500);
           
    
    }
 }
    





