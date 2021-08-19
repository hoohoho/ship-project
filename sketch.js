var seaImage
var ship_movement
var ship
var sea






function preload(){
ship_movement = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaImage  = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200, 200, 10, 10)
  sea.addAnimation("Image", seaImage);
  ship = createSprite(150,250,20,20);
  ship.addAnimation("movement", ship_movement);
  sea.scale = 0.3;
  ship.scale = 0.2;
}

function draw() {
  background("blue")
  drawSprites();
 
}
