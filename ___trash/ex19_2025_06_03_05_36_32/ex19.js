let x, y;
let mot = "clic ici si tu peux";

function setup() {
  createCanvas(500, 300);
  textSize(32);
  textAlign(CENTER, CENTER);
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(240);

  let d = dist(mouseX, mouseY, x, y);
  if (d < 50) {
    x += random(-30, 30);
    y += random(-30, 30);
  }

  // Garde le truc dans le machin
  x = constrain(x, 50, width - 50);
  y = constrain(y, 50, height - 50);

  fill(0);
  text(mot, x, y);
}
