
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof= new Roof(350,150,450,50);
	bob1= new Bob(220,350,30);
	bob2= new Bob(280,350,30);
	bob3= new Bob(340,350,30);
	bob4= new Bob(400,350,30);
	bob5= new Bob(460,350,30);
	rope1= new Rope(bob1.body,roof.body,-120,0);
	rope2= new Rope(bob2.body,roof.body,-60,0);
	rope3= new Rope(bob3.body,roof.body,0,0);
	rope4= new Rope(bob4.body,roof.body,60,0);
	rope5= new Rope(bob5.body,roof.body,120,0);
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);
  

 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 roof.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();

 drawSprites();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(bob1.body,bob1.body.position,{x:-70,y:50})
	}
}



