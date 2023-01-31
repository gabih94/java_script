//placar do jogo
let myPoints = 0;
let opponentPoints = 0;


function includeScore(){
    stroke(255)
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(myPoints, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(opponentPoints, 470, 26);
}
  
function scorePoint(){
    if(xBoll > 588){
      myPoints += 1;
      ponto.play();
    }
    if(xBoll < 7){
      opponentPoints += 1;
      ponto.play();
    }
}