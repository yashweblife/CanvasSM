import Canvas from "../Canvas"
import Vector from "../Vector"

export default class Ball {
    vel:Vector=new Vector()
    acc:Vector=new Vector()
    r:number=10
    color='red'
    constructor(public pos=new Vector()){}
    draw(c:Canvas){
        c.circle(this.pos.x, this.pos.y, this.r, this.color)
    }
    get bound(){
        return {
            x1: this.pos.x-this.r,
            y1: this.pos.y-this.r,
            x2: this.pos.x+this.r,
            y2: this.pos.y+this.r
        }
    }
    addForce(f:Vector){this.vel.add(f)}
    update(){
        this.vel.add(this.acc)
        this.pos.add(this.vel)
        this.acc.scale(0)        
    }
}