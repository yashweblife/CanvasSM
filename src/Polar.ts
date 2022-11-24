import { Vector } from "./Vector";

export class Polar{
    public r:number=0;
    public theta:number=0;
    constructor(r:number=0,theta:number=0){
        this.r = r;
        this.theta=theta
    }
    public add = (val:Polar)=>{
        this.r+=val.r
        this.theta+=val.theta
    }
    public scalar = (val:number)=>{
        this.r*=val
    }
    public toVector = ():Vector=>{
        return(new Vector(this.r*Math.cos(this.theta), this.r*Math.sin(this.theta)))
    }
    public static fromVector = (val:Vector):Polar=>{
        const r = val.mag;
        const theta = Math.atan2(val.y,val.x)
        return(new Polar(r,theta))
    }
}