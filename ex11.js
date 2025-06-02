let mot = "Coucou";
let taille = 64;

function setup() {
  createCanvas(600, 300);
  textSize(taille);
  textAlign(CENTER, CENTER);
  noStroke();
}

function draw() {
  background(240);
  
  fill(0);
  text(mot, width / 2, height / 3);

  // Reflet
  let transparence = map(dist(mouseX, mouseY, width / 2, height / 2), 0, width / 2, 100, 0);
  fill(0, transparence);

  push();
  translate(width / 2, height / 3);
  scale(1, -1); // effet miroir vertical

  for (let i = 0; i < mot.length; i++) {
    let lettre = mot.charAt(i);
    let x = (i - mot.length / 2) * taille * 0.8;
    let y = sin(frameCount * 0.1 + i) * 5; // vague
    text(lettre, x, y + 10);
  }

  pop();
}
