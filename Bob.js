class Bob{
    constructer(x,y){
        var options={
            restitution : 0.8,
            friction : 1,
            density : 1
        }
    this.body = Bodies.circle(x,y,radius,options);
    this.width = 50;
    this.height = 50;
    World.add(world,this.body);
    }
    display(){
        push();
        fill("pink");
        pop();
    }
}