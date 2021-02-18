var dog,sadDog,happyDog;
var buttonFeed,buttonAdd;
var food;
var database
var foodStockRef;
var foodS = 0;
var xE = 80,yE = 100;

function preload(){
  sadDog=loadImage("Dog.png");
  happyDog=loadImage("happy dog.png");
}

function setup() {
  createCanvas(1000,400);

  database = firebase.database();
  foodStockRef = database.ref("food");
  
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  buttonFeed = createButton("feed");
  buttonFeed.position(450,100)
  buttonFeed.mousePressed(feedStock);
  
  buttonAdd = createButton("add");
  buttonAdd.position(500,100);
  buttonAdd.mousePressed(addStock);

  food = new Food(100,50);
  


}

function draw() {
  console.log();
  background(46,139,87);
  drawSprites();
  food.display();
  updateStock();
}
function stockRead(){

}
//function to read food Stock


//function to update food stock and last fed time
function updateStock(){
  foodStockRef.database.ref("food");
}

//function to add food in stock
function addStock(){
  foodS++;
 database.ref("/").update({
   "food":foodS
  });
 
}
function feedStock(){
  foodS--;
  database.ref("/").update({
    "food":foodS
   });
}