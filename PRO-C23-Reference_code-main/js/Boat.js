class Boat{
   constructor(x,y,width,height){
    this.x=x
    this.y=y
    this.width=width
    this.height=height
    this.body=Bodies.rectangle(x,y,width,height,{isStatic:true})
    World.add(world,this.body)
    this.boat_image=loadImage("assets/boat.png")
   }

   display(){
    var angle=this.body.angle
    push()
    translate (this.x,this.y)
    rotate(this.angle)
    imageMode(CENTER)
    image(this.boat_image,0,0,this.width,this.height)
    pop()
   }

}

