// var marks=[30,40,45,35]
// for (var i=0; i<marks.length; i=i+1)
// {
//   console.log (marks[i])
// }

// function marks_average(){

//   var sum=0;

//   for(var i=0; i<marks.length ; i=i+1)
//   {
//     sum=sum+marks[i]      //0
//   }

// var avg=sum/marks.length;
// console.log(avg);

// }

var weight=[35,38,42,45,43,34,36,41,48,32]

var sum =0 ;



var trex;

function preload()
{


  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  groundimage = loadImage("ground2.png")
}  

function setup(){
  createCanvas(600,200);
 // marks_average()
  for(var i=0; i<weight.length; i=i+1)
  {
    sum = sum+weight[i]
  }
  var avg=sum/weight.length
  console.log (avg)

  trex = createSprite(50,180,20,50);
  trex.addAnimation("running",trex_running)

  edges=createEdgeSprites();
  
  trex.scale=0.5; 
  trex.X=50
  
  ground=createSprite(200,180,400,20);
  ground.addImage("ground",groundimage);
  ground.x = ground.width/2;

  invisibleGround=createSprite(200,190,400,10)
  invisibleGround.visible=false;

}
// CODE INDENTATION

function draw(){
  background("white");
  ground.velocityX=-2

 // console.log(ground.x)
  //console.log("trex is on the move to chase u n tear ur flesh #run")
  console.log(trex.y)
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  //jump when space is pressed and when it is on ground  (trex.y>=162 or trex.y>=100)
  if(keyDown("space")&& trex.y>=100){
    trex.velocityY=-10
  }
 
  trex.velocityY=trex.velocityY+0.5
  //to collide the trex with the bottom edge
 
  trex.collide(invisibleGround)
 
  drawSprites();
}