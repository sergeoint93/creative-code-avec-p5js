function setup() {
  createCanvas(400, 400);
  noStroke();

  // Couleurs observées 
  let couleurTshirt = color(40, 42, 45);      
  let couleurTable = color(149, 117, 74);      
  let couleurMur = color(230, 222, 210);       
  let couleurMain = color(207, 159, 129);    

  //carrés 2x2
  fill(couleurTshirt);
  rect(0, 0, 200, 200);

  fill(couleurTable);
  rect(200, 0, 200, 200);

  fill(couleurMur);
  rect(0, 200, 200, 200);

  fill(couleurMain);
  rect(200, 200, 200, 200);
}
