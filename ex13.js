function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  // la souris colorée
  let rouge = map(mouseX, 0, width, 0, 255);
  let bleu = map(mouseY, 0, height, 0, 255);

  fill(rouge, 100, bleu);
  noStroke();
  ellipse(width / 2, height / 2, 150);
}
