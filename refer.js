/*

class Box{
    constructor(x,y,width,height)
    {
        var options={
            'restitution':0.8,
            'friction':0.3,
            'density':1.0

        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        
        
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0,0,this.width,this.height);
        pop();
    }
}

class Ground{
    constructor(x,y,width,height){
        var option={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2,ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    ground= new Ground(200,390,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
   box1.display();
   box2.display();
   ground.display();
}

<!DOCTYPE html><html><head>
    <script src="p5.js"></script>
    <script src="p5.dom.min.js"></script>
    <script src="p5.sound.min.js"></script>
    <script src="matter.js"></script>
    
    <script src="Box.js"></script>
    <script src="Ground.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8">
    
  </head>
  <body>
      <script src="sketch.js"></script>
  

</body></html>

*/