class Bob{
    constructor(x,y,radius){
        var options = {
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x,this.y,this.radius/2,options);
        World.add (world,this.body);
    }
    display(){
        fill('yellow');
        push ();
        var pos = this.body.position;
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radius);
        pop ();
    }
}
   