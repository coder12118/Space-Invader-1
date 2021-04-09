const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function preload(){
  bg = loadImage("Images/space.jpg");
}
function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  asteroid1 = new Asteroid(700, 100, 30);
  asteroid2 = new Asteroid(400, 300, 30);
  asteroid3 = new Asteroid(600, 450, 30);
  asteroid4 = new Asteroid(320, 250, 30);
  asteroid5 = new Asteroid(800, 500, 30);

  earth = new Earth(100, 350, 80);

  plane = new Plane(1000, 100, 100);
}

function draw() {
  background(bg);
  Engine.update(engine);

  asteroid1.display();
  asteroid2.display();
  asteroid3.display();
  asteroid4.display();
  asteroid5.display();

  earth.display();

  plane.display();

  detectCollision(plane, asteroid1);
  detectCollision(plane, asteroid2);
  detectCollision(plane, asteroid3);
  detectCollision(plane, asteroid4);
  detectCollision(plane, asteroid5);
}

function detectCollision(lplane, lasteroid){
	planeBodyPosition = lplane.body.position
	asteroidBodyPosition = lasteroid.body.position

	var distance = dist(planeBodyPosition.x, planeBodyPosition.y, asteroidBodyPosition.x, asteroidBodyPosition.y)
	if(distance<=lasteroid.r+lplane.r){
		Matter.Body.setStatic(lasteroid.body, false)
	}
}
