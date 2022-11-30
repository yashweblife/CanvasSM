import { Canvas } from './Canvas';
import { Color } from './Color';
import { PhysicsObject } from './PhysicsObject';

export class Ball extends PhysicsObject {
  public color: Color = new Color();
  public size: number = 10;
  constructor() {
    super();
  }
  public setColor = (val: Color = new Color(255, 0, 0)) => {
    this.color = val;
  };
  public draw = (c: Canvas) => {
    c.circle({
      pos: this.pos,
      size: this.size,
      fill: true,
      fillColor: this.color.getColor(),
    });
  };
  public checkCollision = (val: Ball) => {
    if (this.dist(val) <= this.size + val.size) {
      return true;
    } else {
      return false;
    }
  };
  public update = () => {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  };
  public static generate = (size:number)=>{}
}
