var sprite1, sprite2;
function setup() {
  createCanvas(800,400);
  sprite1 = createSprite(400,200,50,80);
  sprite2 = createSprite(700,200,80,30);
  sprite1.debug=true;
  sprite2.debug=true;
  sprite1.shapeColor = "yellow";
  sprite2.shapeColor = "yellow";
}

function draw() {
  background("lightBlue");  
  sprite2.x=World.mouseX;
  sprite2.y=World.mouseY;

 if( sprite1.x - sprite2.x < sprite1.width/2 + sprite2.width/2 &&
   sprite2.x - sprite1.x < sprite1.width/2 + sprite2.width/2 &&
   sprite1.y - sprite2.y < sprite1.height/2 + sprite2.height/2 &&
   sprite2.y - sprite1.y < sprite1.height/2 + sprite2.height/2){
  sprite1.shapeColor = "green";
  sprite2.shapeColor = "green";
 }else{
  sprite1.shapeColor = "yellow";
  sprite2.shapeColor = "yellow";
 }

  drawSprites();
}