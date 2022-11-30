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

  private recalib = () => {
    return;
  };
  public add = (val: Spherical) => {
    this.r += val.r;
    this.theta += val.theta;
    this.psy += val.psy;
  };
  public sub = (val: Spherical) => {
    this.r -= val.r;
    this.theta -= val.theta;
    this.psy -= val.psy;
  };
  public distance = (val: Spherical): number => {
    const p1 = this.r ** 2 + val.r ** 2;
    const p2 = 2 * this.r * val.r;
    const p3 = Math.sin(this.theta) * Math.sin(val.theta);
    const p4 = Math.cos(this.psy - val.psy);
    const p5 = Math.cos(this.theta) * Math.cos(val.theta);
    const dist: number = Math.sqrt(p1 - p2 * (p3 * p4 + p5));
    return dist;
  };
  public scalar = (val: number) => {
    this.r *= val;
  };
  public normalize = () => {
    this.r = 1;
  };
  public rotateX = (val: number) => {
    this.theta += val;
  };
  public rotateY = (val: number) => {
    this.psy += val;
  };
  public fromVector = (vec: Vector) => {
    this.r = vec.mag;
    if (vec.z > 0) this.theta = Math.atan2(Math.sqrt(vec.x ** 2 + vec.y ** 2), vec.z);
    if (vec.z < 0) this.theta = Math.PI + Math.atan2(Math.sqrt(vec.x ** 2 + vec.y ** 2), vec.z);
    if (vec.z === 0) this.theta = Math.PI / 2;
    if (vec.x === 0 && vec.y === 0 && vec.z === 0) this.theta = 0;

    if (vec.x > 0) this.psy = Math.atan2(vec.y, vec.x);
    if (vec.x < 0 && vec.y >= 0) this.psy = Math.atan2(vec.y, vec.x) + Math.PI;
    if (vec.x < 0 && vec.y < 0) this.psy = Math.atan2(vec.y, vec.x) - Math.PI;
    if (vec.x === 0 && vec.y > 0) this.psy = Math.PI / 2;
    if (vec.x === 0 && vec.y < 0) this.psy = -Math.PI / 2;
    if (vec.x === 0 && vec.y === 0) this.psy = 0;
  };
  public static getFromVector = (vec: Vector): Spherical => {
    const output = new Spherical();
    output.r = vec.mag;
    if (vec.z > 0) output.theta = Math.atan2(Math.sqrt(vec.x ** 2 + vec.y ** 2), vec.z);
    if (vec.z < 0) output.theta = Math.PI + Math.atan2(Math.sqrt(vec.x ** 2 + vec.y ** 2), vec.z);
    if (vec.z === 0) output.theta = Math.PI / 2;
    if (vec.x === 0 && vec.y === 0 && vec.z === 0) output.theta = 0;

    if (vec.x > 0) output.psy = Math.atan2(vec.y, vec.x);
    if (vec.x < 0 && vec.y >= 0) output.psy = Math.atan2(vec.y, vec.x) + Math.PI;
    if (vec.x < 0 && vec.y < 0) output.psy = Math.atan2(vec.y, vec.x) - Math.PI;
    if (vec.x === 0 && vec.y > 0) output.psy = Math.PI / 2;
    if (vec.x === 0 && vec.y < 0) output.psy = -Math.PI / 2;
    if (vec.x === 0 && vec.y === 0) output.psy = 0;
    return output;
  };
  public static getToSpherical = (val: Spherical): Vector => {
    const x = val.r * (Math.sin(val.theta) * Math.cos(val.psy));
    const y = val.r * (Math.sin(val.theta) * Math.sin(val.psy));
    const z = val.r * Math.cos(val.theta);
    return new Vector(x, y, z);
  };
  public toVector = (): Vector => {
    const x = this.r * (Math.sin(this.theta) * Math.cos(this.psy));
    const y = this.r * (Math.sin(this.theta) * Math.sin(this.psy));
    const z = this.r * Math.cos(this.theta);
    return new Vector(x, y, z);
  };
}
