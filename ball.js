class Ball{
constructor(x,y){
    var options = {
        isStatic: true
    };

    this.r = 25
    this.body = Bodies.circle(x,y,this.r,options);
    this.image = loadImage("bola2.png");
    World.add(world, this.body);
}
 

 display(){
    var angle=this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    image(CENTER);
    image(this.image,0,0,this.r,this.r);
    pop();

 }

}
























