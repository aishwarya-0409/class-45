var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg

function preload(){
bgImg = loadImage("assets/bg.png")
coinImg = loadImage("assets/coin.jpg")
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3
bg.velocityX = -4;


//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;

coinGroup = createGroup();

score= 0;

}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -3
          }
        // if(balloon.isTouching(topGround)){
         //  balloon.velocityY = 0;
        // }


spawnCoins();

          if(bg.x<8){
            bg.x=100;
          }

          //adding gravity
          balloon.velocityY = balloon.velocityY + 0.5;


          if(balloon.isTouching(coinGroup)){
            score = score+1
            coinGroup.destroyEach();
          }
   
          text("score:"+ score,80,20)
          console.log(score)
        drawSprites();
        
}


function spawnCoins(){
if(frameCount%70===0){

 var coin = createSprite(134,200,20,50);
coin.addImage(coinImg);
coin.scale = 0.06;
coin.velocityX = -2

coinGroup.add(coin)

}
}