var mr
var fr




function setup() {
  createCanvas(1000,800);
  fr=createSprite(400, 200, 50, 50);
  fr.shapeColor="gold"
mr=createSprite(600,200,30,50)
mr.shapeColor="orange"
mr.debug=true
fr.debug=true
}





function draw() {
  background(70,25,25);  
mr.y=World.mouseY
mr.x=World.mouseX

if(mr.x-fr.x<mr.width/2+fr.width/2 && fr.x-mr.x<mr.width/2+fr.width/2
  && mr.y-fr.y<mr.height/2+fr.height/2 && fr.y-mr.y<mr.height/2+fr.height/2 
 
  ) {

fr.shapeColor="pink"
mr.shapeColor="yellow"


}
else{
  mr.shapeColor="orange"
  fr.shapeColor="gold"
}

  drawSprites();

}