var Monkeys;
var bananas,jun;
var bananaGroup,stoneGroup;
var ground;
var score,score2;

function preload(){
    Monkeys = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananas = loadImage("banana.png");
  stones = loadImage("stone.png");
  jun = loadImage("jungle.png");
  
}

function setup() {
  createCanvas(600, 370);

  
  Monkey = createSprite(50,300,400,400);
  Monkey.addAnimation("running", Monkeys);
  bananaGroup = new Group();
  stoneGroup = new Group();
  jungle = createSprite(200,180,400,20);
  jungle.addImage("background", jun);
  jungle.x = jungle.width /2;
  jungle.velocityX = -2;
  Monkey.scale=0.1
  score = 0;
  score2 = 0;
  
  ground = createSprite(-100,300,10000,10);
  ground.visible = false;
}

function draw() {
  background("white");
  if(keyDown("space") && (Monkey.y >= 265 ) ){
    Monkey.velocityY = -20;
  }
  console.log(Monkey.y);
  Monkey.velocityY = Monkey.velocityY + 0.8
  Monkey.depth=jungle.depth
  Monkey.depth=Monkey.depth+1
  
  if (jungle.x < 0){
    jungle.x = jungle.width/2;
  }
  
  score=Math.round(score+frameRate()/60);

  Monkey.collide(ground);
  
  if (bananaGroup.isTouching(Monkey)){
    Monkey.scale=Monkey.scale+0.05
    score2=score2+1;
    bananaGroup.destroyEach();
      }
  
  if (stoneGroup.isTouching(Monkey)){
    
    Monkey.scale=Monkey.scale-0.05
    stoneGroup.destroyEach();
      }
  spawnBananas();
  spawnStones();
  drawSprites();
  fill("red");
  text("Bananas: "+score2,525,20);
  text("Score: "+score,525,40);
}


function spawnBananas() {
  if (frameCount % 200 === 0) {
    var banana = createSprite(600,210,40,10);
        banana.y = random(80,220);
    banana.addImage("food",bananas);
    banana.scale = 0.05 ;
    banana.velocityX = -4;
    bananaGroup.add(banana);
    banana.lifetime = 230;
  }
  
}

function spawnStones() {
  if (frameCount % 200 === 0) {
    var stone = createSprite(600,285,40,10);

    stone.addImage("obstacles",stones);
    stone.scale = 0.1;
    stone.velocityX = -4;
    stoneGroup.add(stone);

    stone.lifetime = 230;
  }
  
}


