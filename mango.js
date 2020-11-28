class Mango{
    constructor(x,y,radius){
        var options ={
            isStatic:true,
            friction: 1,
            restitution:0
        }
        this.body = Matter.Bodies.circle(x,y,radius, options);
        
        World.add(world,this.body);
        this.image=loadImage("mango.png")
        
    }
    display(){
        var pos=this.body.position;
        
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(angle);

        ellipseMode(RADIUS);
       // ellipse(0,0,20,20);
        pop();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y,40, 40);
    }
}