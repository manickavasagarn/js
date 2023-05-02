class Game{
    teams=[];
    constructor(){
        let but=document.createElement('button');
        but.innerText="result";
        but.onclick=this.result();
        document.body.appendChild(but);
    }
    addTeam(team){
        this.teams.push(team);
    }

    result(){
        return() => {
            let team1 = this.teams[0].players.reduce((count,ele)=>{return count+ele.score},0);
            let team2 = this.teams[1].players.reduce((count,ele)=>{return count+ele.score},0);
            if(team1>team2){
                console.log("team one is winner");
            }else{
                console.log("team two is winner");
            }
        }   
    }
}

class Team{
    players=[];
    currentPlayer=0;
    but;
    constructor(){
        this.but=document.createElement('button');
        this.but.innerText="Hide";
        this.but.onclick=this.hidebut();
        document.body.appendChild(this.but);
    }

    addPlayer(player){
        this.players.push(player);
    }

    hidebut() {
       return() => {
           this.players[this.currentPlayer].hide(this);
       }

    }

    changePlayer(){
        this.currentPlayer=this.currentPlayer+1;
        if(this.currentPlayer==10){
            this.but.setAttribute('disabled',true);
        }
    }

}

class Player{
    id;
    score=0;
    noBall=[];
    constructor(id){
        this.id=id;
    }

    hide(team){
            let randScore = Math.floor(Math.random()*7);
            this.noBall.push(randScore);
            this.score=this.score+randScore;
            console.log(this.noBall);
            if(randScore==0 || this.noBall.length==6){
                team.changePlayer();
                console.log(game);
            }
        
        
    }
}

var game = new Game();

var team1 = new Team();
for (let index = 1; index <= 10; index++) {
    team1.addPlayer(new Player(index));
}
var team2 = new Team();
for (let index = 1; index <= 10; index++) {
    team2.addPlayer(new Player(index));
}
game.addTeam(team1);
game.addTeam(team2);
console.log(game);
