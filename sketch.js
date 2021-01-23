var fixedRect, movingRect;

var go1, go2,go3,go4 ;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

go1 = createSprite(100, 400, 50, 80)
go1.shapeColor = 'blue'

go2=createSprite(200,400,50,80)
go2.shapeColor='yellow'

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;  
  movingRect.y = World.mouseY;

  // sprite.isTouching(target) --> what to do, inside draw()

if (Touching(movingRect, go2)){
  movingRect.shapeColor = "red";
  go2.shapeColor = "red";
}  

else{
  movingRect.shapeColor = "green";
  go2.shapeColor = "yellow";
}
  drawSprites();
}





/////////////////////////////////////


