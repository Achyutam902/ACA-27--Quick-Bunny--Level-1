function preload() {
  //load game assets

}

var bunny;
var target;
var edges;
var bricksGroup, bricksGenerator, bricksGenerator2;


function setup() {
  createCanvas(600, 600);
  bunny = createSprite(40, 550, 30, 30);
  target = createSprite(560, 40, 30, 30);
  bunny.shapeColor = "white";
  target.shapeColor = "pink";
  bunny.scale = 0.5;

  edges = createEdgeSprites();
  bricksGroup = new Group();
}

function draw() {
  background("green");
  bunny.bounceOff(edges[0]);
  bunny.bounceOff(edges[1]);
  bunny.bounceOff(edges[2]);
  bunny.bounceOff(edges[3]);
  if (keyDown("up")) {
    bunny.y = bunny.y - 3;
  }
  if (keyDown("down")) {
    bunny.y = bunny.y + 3;
  }
  if (keyDown("left")) {
    bunny.x = bunny.x - 3;
  }
  if (keyDown("right")) {
    bunny.x = bunny.x + 3;
  }
  if (bunny.isTouching(target)) {
    text("YOU WIN", 200, 100);
  }

  brickGenerator();
  bricksGenerator2();

  for (var i = 0; i < (bricksGroup).length; i++) {
    var temp = bricksGroup.get(i);
    if (bunny.isTouching(temp)) {
      bunny.x = 40;
      bunny.y = 550;
    }
  }

  drawSprites();
}

function brickGenerator() {
  if (frameCount % 50 === 0) {
    var brick1 = createSprite(650, 200, 80, 20);
    brick1.shapeColor = "brown";
    brick1.velocityX = -3;
    brick1.lifetime = 250;
    bricksGroup.add(brick1);

  }
}

function bricksGenerator2() {
  if (frameCount % 60 === 0) {
    var brick2 = createSprite(650, 300, 80, 20);
    brick2.shapeColor = "brown";
    brick2.velocityX = -3;
    brick2.lifetime = 250;
    bricksGroup.add(brick2);
  }
}