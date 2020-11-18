var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;



function setup() {
  createCanvas(900,400);
  ground = createSprite(400, 385, 1200, 20);
  division = createSprite(100, 275, 10, 200);
  division2 = createSprite(200, 275, 10, 200);
  division3 = createSprite(300, 275, 10, 200);
  division4 = createSprite(400, 275, 10, 200);
  division5 = createSprite(500, 275, 10, 200);
  division6 = createSprite(600, 275, 10, 200);
  division7 = createSprite(700, 275, 10, 200);
  division8 = createSprite(800, 275, 10, 200);

}

function draw() {
  background(0, 0, 0); 
  
 if(frameCount%10000){
   particle = createSprite(Math.round(random(10, 890)), Math.round(random(0, 10)), 10, 10);


   particle.bounceOff(division);
   particle.bounceOff(division2);
   particle.bounceOff(division3);
   particle.bounceOff(division4);
   particle.bounceOff(division5);
   particle.bounceOff(division6);
   particle.bounceOff(division7);
   particle.bounceOff(division8);
 
 }
 if(particle.isTouching(ground)){
   particle.velocityY = 0;
 }
 else{particle.velocityY = 3}
  
  drawSprites();
}