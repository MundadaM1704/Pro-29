class Ground{
    constructor(){
         var options ={
            isStatic: true
        }
        this.ground = Bodies.rectangle(450,390,900,20,options);
        World.add(world,this.ground);
    }
    display(){
        strokeWeight(2);
        fill("black");
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, 900, 20);
    }
}