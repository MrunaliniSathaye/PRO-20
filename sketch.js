var car, wall 
var speed, weight 

function setup() {
  createCanvas(1600,400);
  speed = random( 55 , 90)
  weight = random ( 400, 1500)

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1000, 200, 60, height/2);
  car.velocityX = speed

  car.shapeColor = color("white")
  wall.shapeColor = color("brown")
  
}

function draw() {
  background(0);  

  if((wall.x-car.x) < (car.width + wall.width)/2){
    car.velocityX=0
    
    var damage = 0.5*weight*speed*speed/22500
    if(damage > 180 ){
      car.shapeColor = color("red")
    }
    
    if( damage < 180 && damage > 100){
     car.shapeColor = color("yellow")
    }

    if( damage < 100 ){
      car.shapeColor = color("green")
     }
  }

  drawSprites();

}