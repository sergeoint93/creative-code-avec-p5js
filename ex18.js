let taille = 40;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(255);

  for (let x = 0; x < width; x += taille) {
    for (let y = 0; y < height; y += taille) {
      let d = dist(mouseX, mouseY, x + taille / 2, y + taille / 2);
      if (d < 50) {
        fill(255, 100, 100); // caré rouge
      } else {
        fill(200);
      }
      rect(x, y, taille, taille);
    }
  }
}
