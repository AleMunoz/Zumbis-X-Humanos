var fundo;
var homem, homemImage;
var barreira;
var limiteDeChao
var zumbiImg;

//executa 1 vez só:
function preload(){
  fundo = loadImage("assets/tela de fundo.gif");
  homemImage = loadImage("assets/shooter_2.png");
  zumbiImg = loadImage("assets/zombie.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  homem = createSprite(140,height - 300,30,100);
  homem.addImage("normal", homemImage);
  homem.scale = 1.0;
  homem.setCollider("rectangle", 0, -40, homem.width/2, homem.height/2 + 80);
  barreira = createEdgeSprites();
  limiteDeChao = height - homem.height;
}
//exetuta várias vezes:
function draw() {
  image(fundo,0,0,width,height);
  drawSprites();
  if(keyDown("up") && homem.y > limiteDeChao + 100){
    homem.y -= 5;
    }
  if(keyDown("down")){
    homem.y += 5;
      }
   if(keyDown("left")){
    homem.x -= 5;
      }   
    if(keyDown("right")){
      homem.x += 5;
        }   
  homem.collide(barreira);
  createZumbis();
  
}

function createZumbis() {
  if (frameCount %200 == 0){
       var zumbi = createSprite(width,random(limiteDeChao + 100, height));
       zumbi.velocityX = -2;
       zumbi.addImage(zumbiImg);
       zumbi.scale = 0.4;
  }
}