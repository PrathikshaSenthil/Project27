class Computer {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);


    this.life1 ="pink";
    this.life2 ="pink";
    this.life3="pink";
    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/man2.png");

  

    World.add(world, this.body);
  }

 
  
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
  Life(){
    push()
    textSize(20)
    fill("white");
     text ("Computer",width-250,40);

     
     fill(this.life1);
   rect(width-250,50,70,30);

   fill(this.life1);
   rect(width-320,50,70,30);

   fill(this.life1);
   rect(width-390,50,70,30);
   pop();
}
}