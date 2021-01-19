
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var tree;
var mango1,mango2,mango3,mango4;
var mango5,mango6,mango7,mango8;
var stone;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400,560,800,20);
	tree = new Tree(600,400,80,400);
	mango1 = new Mango(580,140,40,40);
	mango2 = new Mango(500,160,40,40);
	mango3 = new Mango(640,100,40,40);
	mango4 = new Mango(680,180,40,40);
	mango5 = new Mango(580,60,40,40);
	mango6 = new Mango(520,80,40,40);
	mango7 = new Mango(660,40,40,40);
	mango8 = new Mango(460,60,40,40);
	stone = new Stone(260,400,40,40);
    
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  drawSprites();
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stone.display();
 
}



