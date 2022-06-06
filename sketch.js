var fundo;
var homem, homemRunImage, homemImage, homemShootingImage;
var barreira;
var limiteDeChao;
var zumbiImg, zumbiGroup, bulletGroup;
var isLeft = false;
var score = 0;
var life = 3, heartImg;
var gameState = "play";

//executa 1 vez só:
function preload() {
  fundo = loadImage("assets/tela de fundo.gif");
  homemImage = loadAnimation("assets/parado.png")
  homemRunImage = loadAnimation("assets/correndo1.png", "assets/correndo2.png");
  homemShootingImage = loadAnimation("assets/atirando1.png", "assets/atirando2.png")
  zumbiImg = loadImage("assets/zumbi.png");
  explosionSound = loadSound("assets/explosion.mp3");
  lose = loadSound("assets/lose.mp3");
  winning = loadSound("assets/win.mp3");
  heartImg = loadImage("assets/heart_1.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  homem = createSprite(140, height - 300, 30, 100);
  homem.addAnimation("normal", homemImage);
  homem.scale = 1.0;
  homem.setCollider(
    "rectangle",
    0,
    -40,
    homem.width / 2,
    homem.height / 2 + 80
  );
  barreira = createEdgeSprites();
  limiteDeChao = height - homem.height;
  zumbiGroup = new Group();
  bulletGroup = new Group();
}
//exetuta várias vezes:
function draw() {
  background("black");
  image(fundo, 0, 0, width, height);
  textSize(20);
  fill("white");

  text("Pontuação = " + score, displayWidth - displayWidth*0.10, 200);
  if(gameState == "play") {
    if (score == 100) {
      winning.play();
      gameState = "won";  
    }
    if (life == 0) {
      
      lose.play();
      gameState = "lost";
    }

    if (keyDown("up") && homem.y > limiteDeChao + 100) {
      homem.y -= 5;
    }
    if (keyDown("down")) {
      homem.y += 5;
    }
    if (keyDown("left")) {
      homem.x -= 5;
    }
    if (keyDown("right")) {
      homem.x += 5;
    }
  
    if (zumbiGroup.isTouching(homem)) {
      lose.play();
  
      for (var i = 0; i < zumbiGroup.length; i++) {
        if (zumbiGroup[i].isTouching(homem)) {
          zumbiGroup[i].destroy();
          life = life - 1;
        }
      }
    }
    homem.collide(barreira);
    createZumbis();
    shoot();
    zumbiDestroy();
  } else if (gameState == "lost") {
    textSize(100);
    fill("red");
    text("Você Perdeu ", 400, 400);
    zumbiGroup.destroyEach();
    homem.destroy();
  } else if (gameState == "won") {
    textSize(100);
    fill("yellow");
    text("Você Venceu", 400, 400);
    zumbiGroup.destroyEach();
    homem.destroy();
  }

  displayLife(life);
  drawSprites();
}


function displayLife(life) {
  console.log(life)
  for (i = 1; i <= life; i++) {
    image(heartImg, width - 100 * i, 50, 80, 80);
  }
}

function shoot() {

}

function createZumbis() {
  if (frameCount % 50 == 0) {
    var randomX = random([0, width]);
    var zumbi = createSprite(randomX, random(limiteDeChao + 100, height));
    if (randomX == 0) {
      zumbi.velocityX = 2;
      zumbi.addImage(zumbiImg);
      zumbi.mirrorX(-1);
    } else {
      zumbi.velocityX = -2;
      zumbi.addImage(zumbiImg);
    }

    zumbi.lifetime = width / zumbi.velocityX;
    zumbiGroup.add(zumbi);
  }
}

function zumbiDestroy() {
  if (zumbiGroup.isTouching(bulletGroup)) {
    for (var i = 0; i < zumbiGroup.length; i++) {
    }
  }
}
