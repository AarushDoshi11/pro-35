var Ball, database;
var position;
var hotAirballon1;
var hotAirballon2;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  Ball = createSprite(250,250,10,10);
  Ball.shapeColor = "red";

  hotAirballon1 = createSprite(250,250,10,10);
  hotAirballon1.shapeColor = "green";

  hotAirballon2 = createSprite(250,250,10,10);
  hotAirballon2.shapeColor = "green";

  var BallPosition = database.ref('ball/position');
  BallPosition.on("value", readPosition, showError);
}

function preload(){
  hotAirballon1 = loadImage("hotAirballon1.png");
  hotAirballon2 = loadImage("hotAirballon2.png");
}


function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
    drawSprites();
  
}

