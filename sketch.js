var fundo;
var homem, homemImage;

//executa 1 vez só:
function preload(){
  fundo = loadImage("assets/tela de fundo.gif");
  homemImage = loadImage("assets/shooter_2.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  homem = createSprite(140,height - 300,30,100);
  homem.addImage("normal", homemImage);
  homem.scale = 1.0;
}
//exetuta várias vezes:
function draw() {
  image(fundo,0,0,width,height);
  drawSprites();
  if(keyDown("up")){
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
}

