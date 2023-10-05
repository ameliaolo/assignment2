function setup() {
  createCanvas(500, 500);
}

let cy = 250;
let cx = 250;
let cxx = 240;

function morp() {
  textStyle(BOLD);
  fill(255);
  textSize(175);
  textAlign(CENTER);
  text('merp', cx, cy+45);
  stroke(0);
}

function e() {
  textStyle(BOLD);
  fill(255);
  textSize(175);
  textAlign(CENTER);
  text('e',cx-10, cy+55)
  
}

function merp() {
  textStyle(BOLD);
  fill(0);
  textSize(175);
  textAlign(CENTER);
  text('merp', cx, cy+55);
}

function guy() 
{
  {strokeWeight (2);}
  fill ('#000000');
  circle( cxx, cy, 100)
  
   
  {strokeWeight (1)
  fill (255);
  circle (cxx-25,cy,50)
  circle (cxx+25,cy,50);}
  
  {
  fill (0,0,0);
  circle(cxx-23, cy, 23);
  circle(cxx+23, cy, 23);
  }
  
  strokeWeight(0);
  fill (255);
  circle(cxx-30, cy-5, 8);
  circle(cxx+15, cy-5, 8);
  
}

function dont() {
  let b = '#2162B2'
  
  fill(b);
  //rect(0, 270, 500, 250);
  //arc(245, 250, 510, 450, 0, PI)
  triangle(250, -200, -20, 270, 520, 270)
  
  fill('#15447C');
  arc(245, 250, 500, 250, 0, PI)
  
}

function draw() {
  background('#000000');
  dont();
  
  merp();
  morp();
  e();
 
  guy ();

}