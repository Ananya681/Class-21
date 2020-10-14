
var fixedrect, movingrect;
function setup() {
  createCanvas(800,400);
  fixedrect = createSprite (400,200,30,30);
  fixedrect.shapeColor = "red";
  fixedrect.velocityX = -1;
  movingrect = createSprite (200,200,30,30);
  movingrect.velocityX = 1;
  movingrect.shapeColor = "pink";
}

function draw() {
  background(255,255,255);  
bounceoff(movingrect,fixedrect);

/*if(isTouching(movingrect,fixedrect)){
  movingrect.shapeColor = "green";
    fixedrect.shapeColor = "green";
}
else {
  movingrect.shapeColor = "yellow";
    fixedrect.shapeColor = "pink";
}*/
 
  drawSprites();
}