class Bob{
    constructor(x,y,r){
      var option={
          isStatic:false,
          restitution:1,
          friction:0,
          density:1.5
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(this.x, this.y, this.r/2, option);
      World.add(world, this.body);
    }
    display(){
      var paperPos = this.body.position;
 
      push()
      ellipseMode(CENTER);
      translate(paperPos.x, paperPos.y);
      strokeWeight(1);
      fill(255,0,255);
      ellipse(0,0,this.r);
      pop()
    }
 }