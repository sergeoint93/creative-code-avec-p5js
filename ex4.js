let fontSize = 20; 

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(240);

  // agrendir le text
  fontSize += 1.5;

  // centrer le texte au centre
  textSize(fontSize);
  fill(0);
  text("Bonjour", width / 2, height / 2);

  // limiter la taille max
  //if (fontSize > 150) {
   // fontSize = 20; // recommencer
 // }
}