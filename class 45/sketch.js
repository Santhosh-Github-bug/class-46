var player,playerImg;
 var ground,groundImg;
 var ghost,ghostImg;
 var ghostGroup,bulletGroup;
 var bullet,bulletImg;


  function preload(){
    playerImg = loadAnimation("p1.png","p2.png","p3.png","p4.png")
    groundImg = loadImage("ground.png")
    ghostImg = loadAnimation("ghost1.png","ghost2.png","ghost3.png","ghost4.png","ghost5.png")
    bulletImg = loadImage("bullet.png");
  }


function setup() {
  createCanvas(1100,800);

  ground = createSprite(600,400,1100,800)
  ground.addImage(groundImg);
  ground.velocityX = -12;
  ground.scale = 1.4;

  player= createSprite(250, 300, 50, 50);
  player.addAnimation("running",playerImg);
  player.scale = 0.6; 

ghostGroup = new Group();
bulletGroup = new Group();
}

function draw() {
  background(0);  
  if(ground.x<300){
    ground.x = 400;
  }
  spawnEnemies();
  drawSprites();
}

function spawnEnemies(){
if (frameCount%150===0){
  ghost = createSprite(1000,300,50,50);
  ghost.addAnimation("jumping",ghostImg);
  ghost.velocityX = -6;
  ghost.scale = 0.5
  ghost.lifetime = 1100;
  ghostGroup.add(ghost)
}
}

function spawnBullets(){
  if (frameCount%150===0){
    bullet = createSprite(player.x+50,player.y,50,50);
    bullet.addImage(bulletImg);
    bullet.velocityX = 6;
    bullet.scale = 0.5
    bullet.lifetime = 1100;
  bulletGroup.add(bullet)

  }
  }