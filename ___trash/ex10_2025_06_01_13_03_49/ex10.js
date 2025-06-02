let angle = 0;
let mot = "Coucou";
let taille = 64;

function setup() {
  createCanvas(600, 200);
  textSize(taille);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(240);
  fill(0);

  push();
  translate(width / 2, height / 2);

  for (let i = 0; i < mot.length; i++) {
    let lettre = mot.charAt(i);
    let x = (i - mot.length / 2) * taille * 0.8;
    let y = sin(angle + i * 0.4) * 10;

    push();
    translate(x, y);
    rotate(sin(angle + i) * 0.05); // effet vent
    text(lettre, 0, 0);
    pop();
  }

  pop();
  angle += 0.03;
}
