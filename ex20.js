let feuilles = [];

function setup() {
  createCanvas(400, 400);
  noStroke();

  // Création de feuilles
  for (let i = 0; i < 20; i++) {
    feuilles.push({
      x: random(width),
      y: random(-200, 0),
      vitesseY: random(1, 2),
      phase: random(TWO_PI),
      taille: random(10, 20),
      couleur: color(random(100, 200), 180, 100)
    });
  }
}

function draw() {
  background(230, 245, 255);

  for (let f of feuilles) {
    // Balancier horizontal
    let vent = sin(frameCount * 0.03 + f.phase) * 1.5;

    // faire bouger les tucs avec la souris
    let d = dist(mouseX, mouseY, f.x, f.y);
    if (d < 40) {
      f.x += (f.x - mouseX) * 0.1; // s’éloigne de la souris
      f.y += (f.y - mouseY) * 0.1;
    } else {
      f.y += f.vitesseY;
      f.x += vent;
    }

    // reviens en haut
    if (f.y > height) {
      f.y = random(-50, 0);
      f.x = random(width);
    }

    fill(f.couleur);
    ellipse(f.x, f.y, f.taille, f.taille * 0.6);
  }
}
