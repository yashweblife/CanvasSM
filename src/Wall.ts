import { Canvas } from './Canvas';
import { Color } from './Color';
import { PhysicsObject } from './PhysicsObject';
import { Vector } from './Vector';

export class Wall extends PhysicsObject {
  public color: Color = new Color(200, 0, 0);
  constructor(pos: Vector, end: Vector) {
    super();
    this.pos = pos;
    this.size = end;
  }
  public setColor = (val: Color) => {
    this.color = val;
  };
  public checkIntersection = (val: PhysicsObject): boolean => {
    if (val.size instanceof Vector) {
      const a = this.pos;
      const a1 = this.size as Vector;
      const b = val.pos;
      const b1 = val.size as Vector;
      if (a.x + a1.x > b.x && a.x + a1.x > b.x + b1.x && a.y + a1.y < b.y + b1.y && a.y + a1.y > b.y) {
        return true;
      } else {
        return false;
      }
    } else {
      const a = this.pos;
      const a1 = this.size;
      const b = val.pos;
      const b1 = val.size as number;
      if (a.dist(b) <= b1) {
        return true;
      } else {
        return false;
      }
    }
  };
  public draw = (c: Canvas) => {
    c.rect({
      pos: this.pos,
      size: this.size as Vector,
      fill: true,
      fillColor: this.color.getColor(),
    });
  };
}
