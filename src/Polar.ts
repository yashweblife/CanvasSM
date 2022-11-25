import { Vector } from './Vector';

export class Polar {
  public r: number = 0;
  public theta: number = 0;
  constructor(r: number = 0, theta: number = 0) {
    this.r = r;
    this.theta = theta;
  }
  public getRad = (deg: number): number => {
    return deg * (Math.PI / 180);
  };
  public getDeg = (rad: number): number => {
    return rad * (180 / Math.PI);
  };
  public add = (val: Polar) => {
    this.r += val.r;
    this.theta += val.theta;
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
    const x = Math.cos(this.theta);
    const y = Math.sin(this.theta);
    this.r = Math.atan2(y, x);
  };
  public rand = () => {
    return new Polar(Math.random(), Math.random());
  };
  public randSigned = () => {
    return new Polar(Math.random() - 0.5, Math.random() - 0.5);
  };
  public clone = (): Polar => {
    return new Polar(this.r, this.theta);
  };
  public negative = () => {
    this.r = -this.r;
    this.theta = -this.theta;
  };
  public static generateRand = (size: number, max: number): Polar[] => {
    const output: Polar[] = [];
    for (var i = 0; i < max; i++) {
      output.push(new Polar(Math.random() * max, Math.random()));
    }
    return output;
  };
  public static generateRandSigned = (size: number, max: number) => {
    const output: Polar[] = [];
    for (var i = 0; i < max; i++) {
      output.push(new Polar((Math.random() - 0.5) * max, Math.random() - 0.5));
    }
    return output;
  };
}
