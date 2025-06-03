let boxSize= 20;

let posY = 123;
let posX = 234
let vitesse = -1;
let vitX = 2
let vitY = 1.1234;
let r = Math.random()*255;
let v = Math.random ()*255;
let b = Math.random()*255;







function setup() {
  createCanvas(400, 400);

for (let y =0; y<8; y++){
  for(let x =0; x <8;x++){
    print (x,y);
    fill (x*32, 0, y*32);
    square(x*50, y*50,50);
  }
}
}

function draw() {
 
  fill (r,v,b);
  square(posX, posY, boxSize);
  
  
posX= posX + vitX;
  posY+= vitY; // posY = posY + vitY
  
  

  

   if (posX + boxSize > width ||posX <0 )
   {vitX = vitX *-1;
      changeColor()                  }
     if (posY + boxSize > height ||posY <0 )
   {vitY = vitY *-1;
      changeColor()                  }
  
function changeColor() {
  
  r = Math.random()*255;
v = Math.random ()*255;
 b = Math.random()*255;
}
  
}
