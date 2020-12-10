
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof,bob1,bob2,bob3,bob4,bob5;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,200,300,30);
	bob1 = new Bob(150,600,50,50);
	bob2 = new Bob(200,600,50,50);
	bob3 = new Bob(250,600,50,50);
	bob4 = new Bob(300,600,50,50);
	bob5 = new Bob(350,600,50,50);
	
    rope1 = new Rope(roof.body,bob1.body)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  
  drawSprites();
 
}



