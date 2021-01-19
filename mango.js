class Mango{
    constructor(x,y,width,height) {
    this.image = loadImage("sprites/mango.png");
    var boptions = {restitution:0.8,friction:1.5,density:0.9,isStatic:true};
    this.body = Bodies.rectangle(x,y,width,height,boptions);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    }
    display() {
    
    push();
    fill("yellow");
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height)
    pop();
    }
    }