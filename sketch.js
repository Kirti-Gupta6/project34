const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	var midPos = width/2;
    var bobDiameter = 60;
    bob1 = new Bob(midPos-bobDiameter*2,500, 60);
	World.add(world, bob1);
	
	bob2 = new Bob(midPos-bobDiameter,500, 60);
    World.add(world, bob2);
	
	bob3 = new Bob(midPos,500, 60);
	World.add(world, bob3);
	
	bob4 = new Bob(midPos+bobDiameter,500, 60);
	World.add(world, bob4);
	
	bob5 = new Bob(midPos+bobDiameter*2,500, 60);
	World.add(world, bob5);

	
	
	ground = new Ground(width/2,200,1200,50);
	World.add(world, ground);
	
	
	rope1 = new Rope(bob1.body,ground.body,-bobDiameter*2,0);
	rope2 = new Rope(bob2.body,ground.body,-bobDiameter*1,0);
	rope3 = new Rope(bob3.body,ground.body,0,0);
	rope4 = new Rope(bob4.body,ground.body,bobDiameter*1,0);
	rope5 = new Rope(bob5.body,ground.body,bobDiameter*2,0);

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
  ground.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
}
function mouseDragged(){
	Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
}


