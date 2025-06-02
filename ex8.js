function setup() {
  createCanvas(600, 400);
  background(255);
  stroke(0);
  noFill();
  strokeWeight(2);

  dessinerCarre(50, 50);
  dessinerRect(150, 50);
  dessinerPara(270, 50);
  dessinerLos(390, 50);
  dessinerTrap(50, 150);
  dessinerFleche(170, 150); // "Dart"
  dessinerCerf(290, 150);
}

// Carré
function dessinerCarre(x, y) {
  rect(x, y, 50, 50);
}

//Rect
function dessinerRect(x, y) {
  rect(x, y, 80, 50);
}

//  Para
function dessinerPara(x, y) {
  beginShape();
  vertex(x, y);
  vertex(x + 70, y);
  vertex(x + 50, y + 50);
  vertex(x - 20, y + 50);
  endShape(CLOSE);
}

//  Losange
function dessinerLos(x, y) {
  beginShape();
  vertex(x, y + 25);
  vertex(x + 25, y);
  vertex(x + 50, y + 25);
  vertex(x + 25, y + 50);
  endShape(CLOSE);
}

//  Trapèze
function dessinerTrap(x, y) {
  beginShape();
  vertex(x + 10, y);
  vertex(x + 60, y);
  vertex(x + 50, y + 50);
  vertex(x + 20, y + 50);
  endShape(CLOSE);
}

//  Flèche 
function dessinerFleche(x, y) {
  beginShape();
  vertex(x + 30, y);      // sommet haut
  vertex(x + 60, y + 50); // droite
  vertex(x + 30, y + 40); // bas intérieur
  vertex(x, y + 50);      // gauche
  endShape(CLOSE);
}

// 🪁 Cerf-volant 
function dessinerCerf(x, y) {
  beginShape();
  vertex(x + 30, y);        // haut
  vertex(x + 50, y + 30);   // droite
  vertex(x + 30, y + 60);   // bas
  vertex(x + 10, y + 30);   // gauche
  endShape(CLOSE);
}
