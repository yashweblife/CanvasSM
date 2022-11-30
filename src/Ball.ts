import { Canvas } from './Canvas';
import { Color } from './Color';
import { PhysicsObject } from './PhysicsObject';
import { Vector } from './Vector';

export class Ball extends PhysicsObject {
  public color: Color = new Color();
  public size: number = 10;
  constructor(pos: Vector = new Vector()) {
    super();
    this.pos = pos;
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
  public static generate = (quantity: number, size: Vector):Ball[] => {
    const output: Ball[] = [];
    for (let i = 0; i < quantity; i++) {
      output.push(new Ball(new Vector(Math.random() * size.x, Math.random() * size.y)));
    }
    return(output)
  };
}
