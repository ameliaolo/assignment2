
function setup() {
  createCanvas(500, 500);
 x = width/2;
y = height;
  
  background("#C4F4FD");

  
}




function Face() {

  
  fill("#94DA1B")
  strokeWeight(.2)
  circle(x, y, 70);
  
  fill(255);
  strokeWeight(.5)

  circle(x-18, y, 25);
  circle(x+18, y, 25);
  
  fill(0);
  circle(x-18, y, 15);
  circle(x+18, y, 15);
}

function draw() {

  Face();
  
  x = x + random(4, -4);
  y = y - random(0, 1.5);
  
    if (y < -20) {
    y = height;}
    
  if (x < -20, x > 520) { 
    x = width;
  }
}