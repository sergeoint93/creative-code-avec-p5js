let boxSize = 20;
let shapeType;

let x, y;
let vx, vy;
let vitesse = -1;
let vitX = 4;
let vitY = 3.1234;
let r = Math.random() * 255;
let v = Math.random() * 255;
let b = Math.random() * 255;

function setup() {

   createCanvas(400, 400);
  shapeType = 0;
  x = width / 2;
  y = height / 2;
  vx = 3;
  vy = 2;
  shapeType = 0; 
}

function draw() {
  fill(r, v, b);

  if (shapeType === 0) {
    ellipse(x, y, 40, 40);
  } else if (shapeType === 1) {
    rect(x - 20, y - 20, 40, 40);
  } else if (shapeType === 2) {
    triangle(x, y - 20, x - 20, y + 20, x + 20, y + 20);
  }


  y += vitY; // posY = posY + vitY

  if (x + boxSize > width || x < 0) {
    vitX = vitX * -1;
    bunceManger();
  }
  if (y + boxSize > height || y < 0) {
    vitY = vitY * -1;
    bunceManger();
  }
}
function bunceManger() {
  r = Math.random() * 255;
  v = Math.random() * 255;
  b = Math.random() * 255;
  
}
function changeShape() {
  shapeType = (shapeType + 1) % 3; // Alterne entre 0, 1 et 2
}
