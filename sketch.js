function setup() {
  createCanvas(400, 400);
}
 let taille = 1000;
let michel = 500;
function draw() {
 background(255,taille,michel,taille); 
  circle(taille,michel,taille); taille =taille -5;
  michel =michel * 0.2;
  
 
 
}