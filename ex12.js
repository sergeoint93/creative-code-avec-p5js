let etoiles = [];

function setup() {
  createCanvas(600, 400);
  noStroke();
  
  // Crée 100 étoiles aléatoires
  for (let i = 0; i < 100; i++) {
    etoiles.push({
      x: random(width),
      y: random(height),
      r: random(1, 4),
      vitesse: random(0.1, 0.5),
      couleur: color(random(200, 255), random(200, 255), 255)
    });
  }
}

function draw() {
  background(10, 10, 30);

  for (let e of etoiles) {
    let d = dist(mouseX, mouseY, e.x, e.y);
    
    // Taille dynamique 
    let taille = e.r + map(d, 0, width / 2, 3, 0);
    
    // Attraction légère 
    let direction = createVector(mouseX - e.x, mouseY - e.y);
    direction.setMag(0.02);
    if (d < 100) {
      e.x += direction.x;
      e.y += direction.y;
    } else {
      e.x += random(-e.vitesse, e.vitesse);
      e.y += random(-e.vitesse, e.vitesse);
    }

    // Affichage
    fill(e.couleur);
    ellipse(e.x, e.y, taille);
  }
}
