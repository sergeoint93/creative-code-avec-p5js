function setup() {
  createCanvas(600, 600);
  background(255);
  strokeWeight(2);
  noLoop(); // Pas besoin d’animer
}

function draw() {
  // Triangle
  stroke(0);
  fill(200, 100, 100);
  triangle(50, 50, 100, 20, 150, 50);

  // Rectangle
  fill(100, 150, 255);
  rect(200, 30, 100, 50);

  // cercle
  fill(150, 200, 100);
  ellipse(400, 55, 80, 50);

  // Ligne
  stroke(0);
  line(50, 150, 150, 200);

  // Points
  strokeWeight(5);
  point(200, 180);
  point(220, 190);
  point(240, 200);
  strokeWeight(2); // reset

  // Courbe 
  noFill();
  stroke(50);
  curve(250, 250, 280, 180, 350, 190, 370, 250);

  // Bézier 
  noFill();
  stroke(0);
  bezier(400, 200, 420, 100, 480, 300, 500, 200);

  // Arc
  fill(255, 200, 100);
  arc(100, 300, 100, 100, 0, PI + QUARTER_PI, PIE);

  // Ligne
  noFill();
  beginShape();
  vertex(250, 300);
  vertex(270, 310);
  vertex(290, 280);
  vertex(310, 320);
  endShape();

  // et forme bizare
  fill(180, 100, 255);
  beginShape();
  vertex(400, 300);
  vertex(450, 280);
  vertex(470, 330);
  vertex(430, 360);
  vertex(390, 320);
  endShape(CLOSE);
}
