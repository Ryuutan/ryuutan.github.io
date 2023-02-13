let Boy;
let Girls = [];

function setup() 
{
  framerate(24);
  createCanvas(windowWidth, windowHeight);

  Boy = new IsekaiProtagonist();
  for(let i = 0; i < 5; i++) 
  {
    Girls.push(new Erodere());
  }
}

function draw() 
{ 
  background(200,134,192); 
  Boy.show();
  for(let i = 0; i < Girls.length; i++)
  {
    Girls[i].move();
    Girls[i].show();
  }
}

class IsekaiProtagonist 
{
  constructor() 
  {
    this.pos = createVector(displayWidth / 2, displayHeight / 2);
    this.size = 100;
  }

  show() 
  {
    ellipseMode(CENTER);
    fill(55);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }


}

class Erodere 
{
  constructor()
  { 
    this.pos = createVector(random(0, displayWidth), random(0, displayHeight));
    this.size = random(10, 100);
    this.v = createVector(1, 1);
  }

  show() 
  {
    ellipseMode(CENTER);
    fill(200);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }

  move()
  {
    this.pos.add(this.v);
  }
}