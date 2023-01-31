//variaveis da bolinha
let xBoll = 300;
let yBoll = 200;
let diBoll = 13;
let raio = diBoll / 2;

//velocidade da bolinha
let moveXBoll = 6;
let moveYBoll = 6;
let lenghtRect = 7;
let heightRect = 90;


function showBoll(){
    circle(xBoll, yBoll, diBoll);
}

function moveBoll(){
  xBoll += moveXBoll;
  yBoll += moveYBoll;
}


function checkCollisionBoll(){
  if(xBoll + raio > width || xBoll - raio < 0){
    moveXBoll *= -1;
  }
  if(yBoll + raio > height || yBoll - raio < 0){
    moveYBoll *= -1;
  }
}

function bollBug(){
  if(xBoll - raio < 0){
    xBoll = 25
  }
  if(xBoll + raio > 600){
    xBoll = 575
  }
}