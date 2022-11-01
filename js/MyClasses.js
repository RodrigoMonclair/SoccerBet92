
class Player{

    constructor(name){
    this.name = name;
    this.creditos = 20;
    this.player1Score = [];
    this.player2Score =[];
    this.player1SelectedTeam = "";
    this.player2SelectedTeam = "";
}


lostCredits(){

}

earnCredits(){

}


getScorePlayer1(score1,score2){
    
    this.player1Score.push(score1)
    this.player1Score.push(score2)
}


getScorePlayer2(score1,score2){
    this.player2Score.push(score1)
    this.player2Score.push(score2)
}

getSelectedTeam1(team){
    this.player1SelectedTeam = team
}

getSelectedTeam2(team){
    this.player2SelectedTeam = team
}



}