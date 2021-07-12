class Block{
    constructor(x, y, width, height){
       var options ={
           restitution:0.4,
           friction:1.0,
           //isStatic:true
       }
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
       World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.pos;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(this.width, this.height, 0, 0);
        pop();
    }
}