let bulles = [];

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(255);

  // Affiche chaque bulle
  for (let i = bulles.length - 1; i >= 0; i--) {
    let b = bulles[i];

    fill(b.r, b.g, b.b, b.alpha);
    ellipse(b.x, b.y, b.taille);

    b.taille += 1;        // la bulle grandit
    b.alpha -= 2;         // la bulle opacité

    if (b.alpha <= 0) {
      bulles.splice(i, 1); // supprime les bulles 
    }
  }
}

function mousePressed() {
  // un clic une bulle
  bulles.push({
    x: mouseX,
    y: mouseY,
    taille: 10,
    alpha: 255,
    r: random(100, 255),
    g: random(100, 255),
    b: random(100, 255)
  });
}
