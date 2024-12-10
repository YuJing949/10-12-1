function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  circle(width / 2, height / 2, (width / 2 - mouseX) * 2);
}
