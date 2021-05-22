class Rope{
    constructor(body1,body2,offX,offY){
        this.offX = offX;
        this.offY = offY;
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offX,y:this.offY}
        }
        this.rope = Con.create(options);
        World.add(world,this.rope);
    
    }
    display(){
        strokeWeight (3);
        stroke ("pink");
      var p1 = this.rope.bodyA.position;  
      var p2 = this.rope.bodyB.position;
      line(p1.x,p1.y,p2.x+this.offX,p2.y+this.offY);
    }
}