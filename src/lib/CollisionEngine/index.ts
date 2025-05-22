import Canvas from "../Canvas";
import Vector from "../Vector";
class Quadrent {
    members: any[] = [];
    constructor(public pos:Vector=new Vector(), public size:Vector){}
    checkMembers(){}
    checkEntries(){}
    update(){}
}
export default class CollisionEngine{
    objects:any[] = [];
    quadrents:Quadrent[] = [];
    constructor(canvas:Canvas){
        const sizeX = canvas.width/2;
        const sizeY = canvas.height/2;
        for(let i=0;i<4;i++){
            this.quadrents.push(new Quadrent(
                new Vector([i*sizeX, i*sizeY]),
                new Vector([sizeX, sizeY])
            ));
        }
    }
    addObject(object:any){
        this.objects.push(object);
    }
    update(){
        this.quadrents.forEach(quadrent => {
            quadrent.checkEntries();
            quadrent.checkMembers();
            quadrent.update();
        })
    }
} 