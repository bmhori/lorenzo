const Engine = Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint = Matter.Constraint;
var player,ball,cesta;
var playerImg, ballImg, fundoImg;
var engine, world;
var angle;
var score=0;
var canvas;
function preload(){
 playerImg=loadImage("pngegg.png");
 ballImg=loadImage("bola2.png");
 fundoImg=loadImage("quadra.jpg");

  
}

function setup(){
  canvas=createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  
  ball= new Ball(1000,925);
 

}

function draw() {
  
  background(189);
  image(fundoImg,0,0,width,height);
   
  image(playerImg,400,800,1500-width,500-height);
  ball.display();
       // drawSprites();
        
}
