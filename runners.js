class runners{
    constructor(x,y,width,height){
        var options = {
            friction : 0.4,
            density : 0.5,
            restitution : 1
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
      
        World.add(world,this.body);
    }

    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    rotate(angle);
    translate(pos.x,pos.y);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
    }
}