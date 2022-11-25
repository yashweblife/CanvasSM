import { Vector } from './Vector';

export class Spherical {
  public r: number = 0;
  public theta: number = 0;
  public psy: number = 0;

  constructor(r: number = 0, theta: number = 0, psy: number = 0) {
    this.r = r;
    this.theta = theta;
    this.psy = psy;
    this.recalib();
  }

  private recalib = () => {};
  public distance = (val: Spherical): number => {
    let dist: number = Math.sqrt(
      this.r ** 2 +
        val.r ** 2 -
        2 * this.r * val.r * (Math.sin(this.theta) * Math.sin(val.theta)) * Math.cos(this.psy - val.psy) +
        Math.cos(this.theta) * Math.cos(val.theta),
    );
    return dist;
  };
  public fromVector = (vec: Vector) => {
    this.r = vec.mag;
    if (vec.z > 0) this.theta = Math.atan2(Math.sqrt(vec.x ** 2 + vec.y ** 2), vec.z);
    if (vec.z < 0) this.theta = Math.PI + Math.atan2(Math.sqrt(vec.x ** 2 + vec.y ** 2), vec.z);
    if (vec.z == 0) this.theta = Math.PI / 2;
    if (vec.x === 0 && vec.y === 0 && vec.z === 0) this.theta = 0;

    if (vec.x > 0) this.psy = Math.atan2(vec.y, vec.x);
    if (vec.x < 0 && vec.y >= 0) this.psy = Math.atan2(vec.y, vec.x) + Math.PI;
    if (vec.x < 0 && vec.y < 0) this.psy = Math.atan2(vec.y, vec.x) - Math.PI;
    if (vec.x === 0 && vec.y > 0) this.psy = Math.PI / 2;
    if (vec.x === 0 && vec.y < 0) this.psy = -Math.PI / 2;
    if (vec.x === 0 && vec.y === 0) this.psy = 0;
  };

  public toVector = (): Vector => {
    const x = this.r * (Math.sin(this.theta) * Math.cos(this.psy));
    const y = this.r * (Math.sin(this.theta) * Math.sin(this.psy));
    const z = this.r * Math.cos(this.theta);
    return new Vector(x, y, z);
  };
}
