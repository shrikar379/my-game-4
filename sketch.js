var ground,Background
var father,son
var tree
var elephant,cheetah,lion,snake,bear;
var preb
var PREPLAY = 0;
var PLAY = 1;
var END = 2;
var gamestate = PREPLAY;


function preload(){
  backgroundimg= loadImage("backgroundnew.jpg")
  fatherimg = loadAnimation("r1.PNG","r2.PNG","r3.PNG","r4.PNG","r5.PNG","r6.PNG","r7.PNG","r8.PNG","r9.PNG","r10.PNG");
  sonimg = loadImage("boy (1).PNG")
  prebimg = loadImage("B1.PNG")
  startimg = loadImage("startb.png")
  //animal
  snakeimg = loadAnimation("snake.PNG")
  elephantimg = loadAnimation("e1 (1).PNG","e1 (2).PNG","e1 (3).PNG","e1 (4).PNG","e1 (5).PNG")
  bearimg = loadAnimation("g1 (1).PNG","g2 (1).PNG","g3 (1).PNG","g4 (1).PNG","g5 (1).PNG","g7 (1).PNG")
  cheetahimg = loadAnimation("c1.PNG","c2.PNG","c3.PNG","c4.PNG","c5.PNG","c6.PNG","c7.PNG",)
  lionimg = loadAnimation("l1 (1).PNG","l2 (1).PNG","l3 (1).PNG","l4 (1).PNG","l5 (1).PNG","l6 (1).PNG",)


  //ya = loadImage("backgroundnew.jpg")
  
  
}

function setup() {
createCanvas(windowWidth,windowHeight);

//ground = createSprite(200,530,3200,20);
background1 = createSprite(windowWidth/2,windowHeight/2)
background1.addImage(backgroundimg)
background1.visible = false;

father = createSprite(25,windowHeight-210);
father.addAnimation("running",fatherimg);
father.scale = 1;
father.visible = false;

son = createSprite(3000,windowHeight-210);
son.addImage(sonimg);
//son.scale = ;
son.visible = false;

preb = createSprite(windowWidth/3+315,windowHeight/2);
preb.addImage(prebimg)
preb.visible = false;
button = createSprite(windowWidth-200,windowHeight-100);
button.addImage(startimg)
button.scale = 0.4;
button.visible = false;

//animalsprites
snake = createSprite(2500,windowHeight-210)
snake.addAnimation("normal",snakeimg)
snake.scale = 0.3
snake.visible = false;

elephant = createSprite(4500,windowHeight-210)
elephant.addAnimation("normal",elephantimg)
elephant.scale = 1.3
elephant.visible = false;

bear = createSprite(6000,windowHeight-210)
bear.addAnimation("normal",bearimg)
bear.scale = 1.3
bear.visible = false;

cheetah = createSprite(8500,windowHeight-210)
cheetah.addAnimation("normal",cheetahimg)
cheetah.scale = 1;
cheetah.visible = false;

lion = createSprite(10000,windowHeight-210)
lion.addAnimation("normal",lionimg)
//lion.scale = 
lion.visible = false;
}

function draw(){
  background("green")
  console.log(gamestate)
  background1.velocityX = -4;
  snake.velocityX = -4;
  elephant.velocityX = -4;
  cheetah.velocityX = -4;
  bear.velocityX = -4;
  lion.velocityX = -4;

  if(background1.x < 0){
    background1.x = 500
  }
if(gamestate === PREPLAY){
  preb.visible = true
  button.visible = true;
  if(mousePressedOver(button)){
    gamestate = PLAY;

  }
}
  if(gamestate===PLAY){
    background1.visible=true;
    father.visible=true;
    preb.visible=false;
    button.visible=false
    snake.visible=true;
    elephant.visible=true;
    bear.visible=true;
    cheetah.visible=true;
    lion.visible=true;
    son.visible=true;

  background1.debug = true;
  
  

  
  }
  

  


  drawSprites()
}