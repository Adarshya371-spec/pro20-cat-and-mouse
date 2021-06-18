var catimg,
function preload() {
    //load the images here
     
bg = loadImage("images/garden.png");
tomImg1= loadAnimation("images/tom.png");
tomImg1= loadAnimation("images/tomOne.png");
tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
together= loadAnimation("images/together.png");
jerryImg1=loadAnimation("images/jerryOne.png")
tomImg3= loadAnimation("images/tomFour.png");
jerryImg1=loadAnimation("images/jerryOne.png");
jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
jerryImg3=loadAnimation("images/jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
