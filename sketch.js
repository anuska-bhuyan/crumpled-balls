
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
var ground1;
var r1Sprite,r2Sprite,r3Sprite
var r1Body,r2Body,r3Body;


function setup() {
	createCanvas(800, 700);

	

  ball=new paper(100,780,50,50);
  ground1=new ground(350,770,700,10);

  r1Sprite=createSprite(200,680,20,100);
	r1Sprite.shapeColor=color(225);

	r2Sprite=createSprite(300,690,200,20);
	r2Sprite.shapeColor=color(225);

	r3Sprite=createSprite(400,680,20,100);
	r3Sprite.shapeColor=color(225);

	engine = Engine.create();
	world = engine.world;
	

	r1Body = Bodies.circle(300, 610 , 5 , {restitution:0, isStatic:true});
	World.add(world, r1Body);
	r2Body = Bodies.circle(400 , 650 , 5 , {restitution:0, isStatic:true});
	World.add(world, r2Body);
	r3Body = Bodies.circle(500 , 610 , 5, {restitution:0, isStatic:true});
	World.add(world, r3Body);

	Engine.run(engine);

  
}


function draw() {
  background(0);
  Engine.update(engine);

ball.display();
ground1.display();
  
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	Matter.Body.setStatic(r1Body,true);
	Matter.Body.setStatic(r2Body,true);
	Matter.Body.setStatic(r3Body,true);
	
   
	   
	 }
   }
   



