function setup() {
  createCanvas(600, 600);
  background("white");
}

function draw() {
  
  stroke("violet");
  fill("grey");
  
  if(mouseIsPressed){
    circle(mouseX, mouseY, 200, 350);
  }
}