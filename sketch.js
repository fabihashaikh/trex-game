
var trex ,trex_running;
var ground;
function preload(){
  
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200);
  
  //create a trex sprite
  trex=createSprite(50,170,15,15);
ground=createSprite(50,190,600,10);

trex.addAnimation("trex",trex_running);
trex.scale=0.5;
}

function draw(){
  background("white")
  if (keyDown("space")) {
    trex.velocityY =-4;
  }
  trex.velocityY=trex.velocityY+0.5
  trex.collide(ground);
  drawSprites()

}
