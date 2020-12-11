
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine;
var world;
var dustbin;
var ground;
var crumBall;

//  function preload(){
	
//  }


function setup() {
	createCanvas(1400, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	
	dustbin = new Dustbin(1200,650);
	 ground = new Ground(width/2,670,width,20);
	 crumBall = new Paper(200,450,40);
	var render = Render.create({
	element: document.body, 
	engine: engine,
	options: {
	width: 1100,
	height: 700, 
	wireframes: false
	}
	});
	
	
	
	Engine.run(engine);

}




function draw() {
//   rectMode(CENTER);
  background(0);


dustbin.display();
  ground.display();
  crumBall.display()


}


function keyPressed() {
if(keyCode === UP_ARROW ){
Matter.Body.applyForce(crumBall.body, crumBall.body.position, {x: 85, y: -85})
}
}



