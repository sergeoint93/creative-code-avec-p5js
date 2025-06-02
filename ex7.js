function setup() {
  createCanvas(400, 400);
  background(255);
  noStroke();
  fill(255, 180, 120); // couleur peau
  
  drawFesses(width / 2, height / 2 + 50, 120);
}

function drawFesses(x, y, size) {
  let r = size / 2;

  // fesses
  arc(x - r / 2, y, r, r, 0, PI, CHORD); // fesse gauche
  arc(x + r / 2, y, r, r, 0, PI, CHORD); // fesse droite

  // alongement
  beginShape();
  vertex(x - r, y);
  vertex(x - r + 10, y - size * 1.5);
  vertex(x + r - 10, y - size * 1.5);
  vertex(x + r, y);
  endShape(CLOSE);

  

}
