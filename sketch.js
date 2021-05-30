
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin,dustbin	
var world;






function setup() {
	createCanvas(1600, 700);
//	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
    paper=new Paper(500,450,70);
	ground=new Ground(800,550,1600,20);
	dustbin = new Dustbin(902,505);


//dustbin.addImage(dustbinImage);
//dustbin.scale = 0.45;






//	Engine.run(engine);
  
}


function draw() {
  
  background("red");
Engine.update(engine);

//(mouseX=","+mouseY,200,200)


  ground.display();
  
  paper.display();
  dustbin.display();
  
 
}


function keyPressed(){

	if (keyDown ( UP_ARROW)){
Matter.Body.applyForce(paper.body,paper.body.position,{x:92,y:-92})

	}
}






