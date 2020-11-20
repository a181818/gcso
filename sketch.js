var car1 , car2 , car3, car4;
var line1 , line2 , line3;
var w1 , w2 , w3 , w4;


function setup() {
  createCanvas(1200,600);
  
  line1 = createSprite(600,150,1200,10);
  line1.shapeColor = "white";

  line2 = createSprite(600,300,1200,10);
  line2.shapeColor = "white";

  line3 = createSprite(600,450,1200,10);
  line3.shapeColor = "white";

  car1 = createSprite(1100,75,30,60);
  car1.shapeColor = "grey";

  car2 = createSprite(1100,220,30,60);
  car2.shapeColor = "grey";

  car3 = createSprite(1100,380,30,60);
  car3.shapeColor = "grey";

  car4 = createSprite(1100,525,30,60);
  car4.shapeColor = "grey";

  w1 = createSprite(50,70,40,20);
  w1.shapeColor = "white";

  w2 = createSprite(1065,220,40,20);
  w2.shapeColor = "yellow";

  w3 = createSprite(1065,380,40,20);
  w3.shapeColor = "red";

  w4 = createSprite(1065,525,40,20);
  w4.shapeColor = "green";
  
}

function draw() {
  background("black");  

  drawSprites();
}