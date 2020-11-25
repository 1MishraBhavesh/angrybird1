const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var ground;
var box1;
var box2;
var box3;
var box4;
var box5;



function setup() {
var canvas = createCanvas(400,400);  

engine = Engine.create();
world = engine.world;

box1 = new Box(200,300,50,50); 
box2 = new Box(240,100,50,100);
box3 = new Box(700,240,70,70);
box4 = new Box(920,240,70,70);
box5 = new Box(810,160,70,70);

ground = new Ground(200,height,400,20);

bird = new Bird(100,100);

pig1 = new Pig(810, 350);
log1 = new Log(810,260,300, PI/2);

box3 = new Box(700,240,70,70);
box4 = new Box(920,240,70,70);
pig3 = new Pig(810, 220);

log3 =  new Log(810,180,300, PI/2);

box5 = new Box(810,160,70,70);
log4 = new Log(760,120,150, PI/7);
log5 = new Log(870,120,150, -PI/7); 
}

function draw() {
  background(0); 
  Engine.update(engine);
  //console.log(box2.body.position.x);
  //console.log(box2.body.position.y);
 //console.log(box2.body.angle);
  
  box1.display();
  box2.display();
  

  ground.display();

  bird.display();

  box3.display();
  box4.display();
  box5.display();

  log1.display(); 
  
  log3.display(); 
  log4.display(); 
  log5.display(); 

  pig1.display();
  
  pig3.display();


  drawSprites();
}