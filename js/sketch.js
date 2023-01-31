
function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  showBoll();
  moveBoll();
  checkCollisionBoll();
  showRect(xRect, yRect)
  showRect(xOpponent, yOpponent)
  moveRect()
  //checkCollisionRect()
  collisionMyRect(xRect, yRect)
  collisionMyRect(xOpponent, yOpponent)
  //moveRectOpponent()
  moveRectOpponentAutomatic()
  calculeChangeErr()
  includeScore()
  scorePoint()
  bollBug()
}
