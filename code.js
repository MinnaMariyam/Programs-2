var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["2f2e0ddc-c7fd-4941-b6a6-d7e7d6739dc0","c45b5328-0522-441a-9242-a916b223bed4"],"propsByKey":{"2f2e0ddc-c7fd-4941-b6a6-d7e7d6739dc0":{"name":"clownfish","sourceUrl":"assets/api/v1/animation-library/gamelab/o_467KxJ2wouBcmgyZqJOaqUxWSaVwBQ/category_animals/clownfish.png","frameSize":{"x":396,"y":250},"frameCount":1,"looping":true,"frameDelay":2,"version":"o_467KxJ2wouBcmgyZqJOaqUxWSaVwBQ","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":250},"rootRelativePath":"assets/api/v1/animation-library/gamelab/o_467KxJ2wouBcmgyZqJOaqUxWSaVwBQ/category_animals/clownfish.png"},"c45b5328-0522-441a-9242-a916b223bed4":{"name":"crab","sourceUrl":"assets/api/v1/animation-library/gamelab/kTmRQ1_RRECOF2u.0RFbMaEMXAWisxyS/category_animals/crab.png","frameSize":{"x":288,"y":191},"frameCount":1,"looping":false,"frameDelay":2,"version":"kTmRQ1_RRECOF2u.0RFbMaEMXAWisxyS","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":288,"y":191},"rootRelativePath":"assets/api/v1/animation-library/gamelab/kTmRQ1_RRECOF2u.0RFbMaEMXAWisxyS/category_animals/crab.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 5;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  sam.setAnimation("clownfish");
 sam.scale=0.07;
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car1.setAnimation("crab");
  car1.scale=0.1;
  
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car2.setAnimation("crab");
  car2.scale=0.1;
  
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car3.setAnimation("crab");
  car3.scale=0.1;
  
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  car4.setAnimation("crab");
  car4.scale=0.1;
  
  car1.velocityY = 7;
  car2.velocityY = 7;
  car3.velocityY = -7;
  car4.velocityY = -7;

function draw() {
  background("white");

  
  stroke("black");
  strokeWeight(1.2);
  text("Lives: " + life,200,100);
  
  
  strokeWeight(0.8);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
  
  car1.bounceOff(boundary1);
   car1.bounceOff(boundary2);
   car2.bounceOff(boundary1);
   car2.bounceOff(boundary2);
   car3.bounceOff(boundary1);
   car3.bounceOff(boundary2);
   car4.bounceOff(boundary1);
   car4.bounceOff(boundary2);
  
 if (keyDown("right")) {
sam.x=sam.x+2;    
 }
if (keyDown("left")) {
sam.x=sam.x+-2;    
 }     
 
 
if (sam.isTouching(car1)||
sam.isTouching(car2)||
sam.isTouching(car3)||
sam.isTouching(car4)){

samReset();

sam.x=20;
sam.y=190;

life=life-1;
   
}

if (life == 0) {
textSize(17);
fill("red");
strokeWeight(1);
text("Game Over!You have lost all your lives",80,57);
car1.velocityY=0;
car2.velocityY=0;
car3.velocityY=0;
car4.velocityY=0;
}
    
  
 drawSprites();
}
function samReset(){
sam.x=20;
sam.x=190;

}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
