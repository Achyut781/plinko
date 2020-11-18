class Divisions{
    constructor(x, y, w, h){
        var options = {

            isStatic:true
        }
       
        this.w = w;
        this.h = h;
     

    }
    display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill("white");
    rect(pos.x, pos.y, this.w, this.h);

    }
};