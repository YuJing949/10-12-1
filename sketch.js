function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);

  //circle(width / 2, height / 2, (width / 2 - mouseX) * 2);

  stroke(0);
  fill(0);

  beginShape();

  vertex(mouseX, mouseY);

  //bezierVertex( mouseX, mouseY, mouseY, mouseX, 350, 400);
  bezierVertex( mouseY, mouseX, 350, 400, mouseY, mouseX, mouseX, mouseY, 200, 200);

  endShape(CLOSE);

  
}

