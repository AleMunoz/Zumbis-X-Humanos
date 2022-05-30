var fundo;
var homem, homemImage;


function preload(){
  fundo = loadImage("assets/tela de fundo.gif");
  homemImage = loadImage("assets/shooter_2.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  homem = createSprite(50,height - 100,30,100);
  homem.addImage("normal", homemImage);
  homem.scale = 0.5;
}

function draw() {
  image(fundo,0,0,width,height);
  drawSprites();
}

