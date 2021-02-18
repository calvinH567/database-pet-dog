class Food {
    constructor(x,y){
        this.image=loadImage("Milk.png");
        this.foodStock;
        this.foodObj;
        this.x = x,this.y = y;
    }/*
    getFoodStock(){

    }
    updateFoodStock(){

    }
    deductFoodStock(){

    }*/
    display(){
        this.foodStock = foodStockRef;
   
        
        for(var i = 0;i<this.foodStock*30;i=i+30){
            for(var o = 0;o<this.foodStock;o=o+30);
            image (this.image,i,60,50,50);
            if(i*30%10==0){
                o = o + 30
            }
        }
            
        
    }
}