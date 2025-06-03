let oldX = 0;
let oldY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
    background(220);
  let R = random(255);
  let V = random(255);
  let B = random(255);
  background(R,V,B);
}

function draw() {
circle(mouseX, mouseY, 10);
  // mouseX - oldX
  oldX += oldX = (mouseX - oldX)/ 100;
  oldY += oldY = (mouseY - oldY) / 100;
}

function mouseClicked(){
   let R = random(255);
  let V = random(255);
  let B = random(255);
  fill (R,V,B);
  
  
}

function keyPressed(){
  if(key == "s"){
    save("drawing.png");
    print("hello");
  }
  if (key == "x"){
       let R = random(255);
  let V = random(255);
  let B = random(255)
  background(R,V,B,)
    
    
  }
}