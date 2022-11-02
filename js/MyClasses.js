
class Player{

    constructor(name){
    this.name = name;
    this.creditos = 20;
    // this.player1Score = [];
    this.computedScore=[0,0];
    this.computedSelectedTeam = [];
    // this.player2Score =[];
    this.player1SelectedTeam = 0;
    this.player2SelectedTeam = 0;
}


lostCredits(){

}

earnCredits(){

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
    
        for(let i=0;i<=8;i++){        
        let teams = ["team1", "team2"]
        let selectTeam = teams[Math.round(Math.random())]
        let goals = ["goal","ngoal"]
        let confirmGoal = goals[Math.round(Math.random())]
                
        if(selectTeam === 'team1'&& confirmGoal === "goal"){
            this.computedScore[0] += 1
        } 
        if(selectTeam === 'team2' && confirmGoal === "goal"){
            this.computedScore[1] += 1
        }  
                
    }
    }
 }
    





