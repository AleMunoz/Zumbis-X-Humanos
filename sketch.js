var fundo;
var homem;


function preload(){
fundo = createImg("assets/tela de fundo.gif");


}

function setup() {
  createCanvas(windowWidth,windowHeight);
  homem = createSprite(20,height -50,30,100);
}

function draw() {
  background(0); 
  fundo.size(windowWidth, windowHeight);
 drawSprites();
}

