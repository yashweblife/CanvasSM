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
    
}