//const used to define matter. (library terms)
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ground;
var ball

function setup()
{
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var groundOption = {
    isStatic: true
  }

  var ballOption = {
    restitution: 0.5,
    density: 2,
    fricitonAir: 3
  }

  ball = Bodies.circle(200,200,25,ballOption);
  World.add(world,ball);

  ground = Bodies.rectangle(200,390,400,20,groundOption);
  World.add(world,ground);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  push()
  fill("red");
  rect(ground.position.x,ground.position.y,400,20);
  pop()
  ellipse(ball.position.x,ball.position.y,25,25);
}

