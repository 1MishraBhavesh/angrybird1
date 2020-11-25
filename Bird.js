class Bird{
    constructor(x,y){
     var options ={
         'restitution':0.8,   // bounciness
         'friction':0.3,     // opposing force to applied force
         'density':0.1       // thickness of the solid (close packing of atoms)
     } 
     this.body = Bodies.rectangle(x, y, 50, 50, options);
     this.width=50;
     this.height=50;   
     World.add(world,this.body);
    }
     display(){
         var pos =this.body.position;
         pos.x=mouseX;
         pos.y=mouseY;
         var angle = this.body.angle;
         push();//capture the new setting
         translate(pos.x, pos.y);//translate the entire game
         rotate(angle); //rotate it
         rectMode(CENTER);
        strokeWeight(3); 
        stroke("blue");
         fill("red");
         rect(0,0,this.width,this.height);
         pop();//capture the old setting
     };
 
 };