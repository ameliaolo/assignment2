function setup() {
  createCanvas(500, 500);
  background(150);

  x = width;
  y = height;
  
}


function Face() {
  circle(mouseX, mouseY, 70);
  
  fill(255);
  
  circle(mouseX-25, mouseY, 30);
  circle(mouseX+25, mouseY, 30);
  
  fill(0);
  circle(mouseX-25, mouseY, 15);
  circle(mouseX+25, mouseY, 15);
}

function draw() {
  
   // stroke(Face);

  
   //Face(mouseX, mouseY, 33, 33);

 Face();
  


}



