//variaveis raquete usuario
let xRect = 5;
let yRect = 150;

// variaveis raquete oponente
let xOpponent = 585;
let yOpponent = 150;
let changeErr = 0;

let velocityYOpponent;

let collision = false;

function showRect(x,y){
  rect(x, y, lenghtRect, heightRect);
}

function moveRect(){
  if (keyIsDown(UP_ARROW)){
    yRect -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRect += 10;
  }
}

//function checkCollisionRect(){
//  if (xBoll - raio < xRect + lenghtRect && yBoll - raio //< yRect +heightRect && yBoll + raio > yRect){
//    moveXBoll *= -1;
//  }
//}

function collisionMyRect(x,y){
  collision = collideRectCircle(x, y, lenghtRect, heightRect, xBoll, yBoll, raio);
  if (collision){
    moveXBoll *= -1;
    racket.play();
  }
}

function moveRectOpponent(){
    if (keyIsDown(87)){
    yOpponent -= 10;
  }
  if (keyIsDown(83)){
    yOpponent += 10;
  }
}

//função para oponente ser automatico

function moveRectOpponentAutomatic(){
  velocityYOpponent = (yBoll - yOpponent - lenghtRect) / 2 - 30;
  yOpponent += velocityYOpponent + changeErr
  calculeChangeErr()
}

function calculeChangeErr(){
  if(opponentPoints >= myPoints){
    changeErr +=1
  }
  if(changeErr >= 39){
    changeErr = 30
  }else{
    changeErr -= 1
    if(changeErr <= 35){
      changeErr = 35
    }
  }
}