import { Spherical } from './Spherical';
import { Vector } from './Vector';

export class Polar {
  public r: number = 0;
  public theta: number = 0;
  constructor(r: number = 0, theta: number = 0) {
    this.r = r;
    this.theta = theta;
  }
  public static getRad = (deg: number): number => {
    return deg * (Math.PI / 180);
  };
  public static getDeg = (rad: number): number => {
    return rad * (180 / Math.PI);
  };
  public add = (val: Polar) => {
    this.r += val.r;
    this.theta += val.theta;
  };
  public sub = (val: Polar) => {
    this.r -= val.r;
    this.theta -= val.theta;
  };
  public dist = (val: Polar) => {
    const d: number = Math.sqrt(this.r ** 2 + val.r ** 2 - 2 * this.r * val.r * Math.cos(this.theta - val.theta));
    return d;
  };
  public distFromVector = (val: Vector): number => {
    const ptov = this.toVector();
    return val.dist(ptov);
  };
  public distFromSpherical = (val: Spherical): number => {
    const stov = val.toVector();
    const ptov = this.toVector();
    return stov.dist(ptov);
  };
  public scalar = (val: number) => {
    this.r *= val;
  };
  public toVector = (): Vector => {
    return new Vector(this.r * Math.cos(this.theta), this.r * Math.sin(this.theta));
  };
  public static fromVector = (val: Vector): Polar => {
    const r = val.mag;
    const theta = Math.atan2(val.y, val.x);
    return new Polar(r, theta);
  };
  public normalize = () => {
    const x = this.r * Math.cos(this.theta);
    const y = this.r * Math.sin(this.theta);
    this.r = Math.atan2(y, x);
  };
  public static rand = () => {
    return new Polar(Math.random(), Math.random());
  };
  public static randSigned = () => {
    return new Polar(Math.random() - 0.5, Math.random() - 0.5);
  };
  public clone = (): Polar => {
    return new Polar(this.r, this.theta);
  };
  public negative = () => {
    this.r = this.r;
    this.theta = Math.PI - this.theta;
  };
  public static generateRand = (size: number, max: number): Polar[] => {
    const output: Polar[] = [];
    for (let i = 0; i < size; i++) {
      output.push(new Polar(Math.random() * max, Math.random()));
    }
    return output;
  };
  public static generateRandSigned = (size: number, max: number) => {
    const output: Polar[] = [];
    for (let i = 0; i < size; i++) {
      output.push(new Polar((Math.random() - 0.5) * max, Math.random() - 0.5));
    }
    return output;
  };
}
