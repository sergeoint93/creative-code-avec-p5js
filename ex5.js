let maxPoints = 100;
let x = [];
let y = [];

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255);

  // position souris
  x.push(mouseX);
  y.push(mouseY);

  // le nombre de points
  if (x.length > maxPoints) {
    x.shift();
    y.shift();
  }

  // relier les points
  noFill();
  stroke(0);
  strokeWeight(2);
  beginShape();
  for (let i = 0; i < x.length; i++) {
    vertex(x[i], y[i]);
  }
  endShape();
}
