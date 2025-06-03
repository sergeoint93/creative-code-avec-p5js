let x, y;

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(240);

  // la vitesse douce
  x = lerp(x, mouseX, 0.05);
  y = lerp(y, mouseY, 0.05);

  fill(100, 150, 255);
  noStroke();
  ellipse(x, y, 40, 40);
}
