
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
const Render = Matter.Render
var ground,boy,tree,stone,mango1,mango2,mango3,mango4,hand;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,height,800,10)
	tree=new Tree(600,450,400,500)
	stone=new Stone(100,550,40,40)
	boy=new Boy(250,650,200,200)
  mango1=new Mango(420,418,40)
  mango2=new Mango(390,418,40)
  mango3=new Mango(396,340,40)
  mango4=new Mango(260,370,40)
  mango5=new Mango(520,340,40)

	hand=new Hand(stone.body,{x:140,y:560})
  Engine.run(engine);
  var render = Render.create({ element: document.body, engine: engine, options: { width: 800, height: 700, wireframes: false } });
  Render.run(render)

}


function draw() {
  rectMode(CENTER);
  
  background(0);
  
  ground.display()
  tree.display()
  stone.display()
  boy.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  detectcollision(stone,mango1)
  detectcollision(stone,mango2)
  detectcollision(stone,mango3)
  detectcollision(stone,mango4)
  detectcollision(stone,mango5)
  drawSprites();
  text(mouseX+","+mouseY,mouseX,mouseY)

  
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    hand.fly();
}
function detectcollision(lstone,lmango){
   var distance=dist(lstone.body.position.x,lstone.body.position.y,lmango.body.position.x,lmango.body.position.y,)
   //console.log(distance)
   if (distance<=40+20){
     Matter.Body.setStatic(lmango.body,false)
    
   }
   
}
function  keyPressed(){
  console.log(keyCode)
  if (keyCode===82){
    Matter.Body.setPosition(stone.body,{x:hand.pointB.x,y:hand.pointB.y})
    hand.attach(stone.body)
    
  }
}



