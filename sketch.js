const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var city;
var hotel;
var school;
var coins;
var girl;
var background1;

function preload(){
    backgroundImg = loadImage("./assets/city.png")
    schoolImg = loadImage("./assets/School-building.png")
    hotelImg = loadImage("./assets/hotel.png")
    coinsImg = loadImage ("./assets/goldCoin.png")
    girlImg = loadImage("./assets/girl2.png")
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  background1 = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
  background1.addImage(backgroundImg)
  background1.setVelocity(-0.5,0) 
  background1.scale= 3
engine = Engine.create();
  world = engine.world;
building1 = new Building(windowWidth-100,windowHeight-100,200,400)
girl = new Girl(windowWidth-1000,windowHeight-80,120,140)
school1 = new School(windowWidth-800,windowHeight-100,200,400)
}

function draw(){
    background(backgroundImg)
    drawSprites()
    if(background1.position.x<550){
      background1.position.x =windowWidth/2
    }
    
    building1.display()
    girl.display()
    school1.display()
    Engine.update(engine);
    
}
function keyPressed(){
  //if(keyCode===UP_ARROW){
    //Matter.Body.applyForce(girl,{x:0,y:0},{x:50,y:-0.5}) 
   // girl.jump()
    //console.log("KK")
  //}
  //}        
  if(keyDown(UP_ARROW)){
    girl.jump()
    console.log("jumpgirl")
  }
  else if(keyDown(LEFT_ARROW)){
    building1.move()
    console.log("jumpbuild")
  }
}