var car,wall,car2,car3
var wall2,wall3,wall4
var speed,weight



function setup() {
 wall= createCanvas(1500,200,60,height/2);
wall=shapeColor= ("blue");
  speed=random(55,90)
  weight=random(400,1500)

car2=createSprite(100,100,50,50)
car2.velocityX=speed
car2.shapeColor=("green")
wall3=createSprite(1453,100,60,60)
wall3.shapeColor=("grey")

car3=createSprite(100,00,50,50)
car3.velocityX=speed
car3.shapeColor=("teal")
wall4=createSprite(1453,00,60,60)
wall4.shapeColor=("grey")

  car=createSprite(100,200,50,50)
  car.velocityX=speed
  car.shapeColor=("red")
wall2=createSprite(1453,200,80,80)
wall2.shapeColor=("grey")
}

function draw() {
  background("cyan");  
  if(wall.x-car.x<(car.width+wall.width/2))
  {
car.velocityX=0;
var deformation=0.5 *weight*speed/22500

if( deformation>180 ) {
car.shapeColor=color("red")
}
if(deformation<180 && deformation>100){

car.shapeColor=color("green")
}
  }
  if(car.isTouching(wall2)){
    car.x=1385
    car.velocityX=0
    car.shapeColor=("grey")
    wall2.shapeColor=("red")

  }
  if(car2.isTouching(wall3)){
    car2.x=1385
    car2.velocityX=0
    car2.shapeColor=("grey")
    wall3.shapeColor=("green")

  }
  if(car3.isTouching(wall4)){
    car3.x=1385
    car3.velocityX=0
    car3.shapeColor=("grey")
    wall4.shapeColor=("teal")

  }

  if(car && car2 && car3.isTouching(wall4 && wall3 && wall2)){
background.shapeColor=("teal")

  }
  drawSprites();

}