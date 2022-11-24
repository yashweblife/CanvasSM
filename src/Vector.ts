/**
 * # Vector
 * ### This is the main library for Vectors.
 * Its primary functions are
 * Name | Info
 * -------|--------
 * add | Adds a vector
 * sub | Subtracts a vector
 * scalar | Scalar multiplication
 * normalize | Converts to a unit vector
 * dot | Vector dot product
 * cross | Vector cross product
 * rand | Generates a random vector
 * rotate | Rotates a vector
 * clone | Clones the vector
 */

export class Vector {
  public x: number = 0;
  public y: number = 0;
  public z: number = 0;
  public mag: number = 0;
  public ux: number = 0;
  public uy: number = 0;
  public uz: number = 0;
  public angle: number = 0;
  /**
   *
   * @param x : X value; default is 0
   * @param y : y value; default is 0
   */
  constructor(x: number = 0, y: number = 0, z: number = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.recalib();
  }
  /**
   * Recaliberates the vector data
   */
  private recalib = () => {
    this.mag = Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
    if (this.mag === 0) {
      this.ux = 0;
      this.uy = 0;
      this.uz = 0;
    } else {
      this.ux = this.x / this.mag;
      this.uy = this.y / this.mag;
      this.uz = this.z / this.mag;
    }
    this.angle = Math.atan2(this.y, this.x);
  };
  /**
   * Adds a Vector to the selected vector
   * @param a Vector
   */
  public add = (a: Vector) => {
    this.x += a.x;
    this.y += a.y;
    this.z += a.z;
    this.recalib();
  };
  /**
   * Subtracts a vector
   * @param a Vector
   */
  public sub = (a: Vector) => {
    this.x -= a.x;
    this.y -= a.y;
    this.z -= a.z;
    this.recalib();
  };
  /**
   * Multiplies vector with a number
   * @param a Number
   */
  public scalar = (a: number) => {
    this.x *= a;
    this.y *= a;
    this.z *= a;
    this.recalib();
  };
  /**
   * Sets vector to unit vector
   */
  public normalize = () => {
    if (this.mag === 0) {
      this.x = 0;
      this.y = 0;
      this.z = 0;
    } else {
      this.x = this.x / this.mag;
      this.y = this.y / this.mag;
      this.z = this.z / this.mag;
    }
    this.recalib();
  };
  /**
   * Vector dot product
   * @param a Vector
   * @returns A scalar multiplier
   */
  public dot = (a: Vector): number => {
    return this.x * a.x + this.y * a.y;
  };
  /**
   * Vector cross product
   * @param a Vector
   */
  public cross = (a: Vector) => {
    return this.x * a.x - this.y * a.y;
  };
  /**
   * Returns distance between 2 vectors
   */
  public dist = (a: Vector): number => {
    return Math.sqrt((this.x - a.x) ** 2 + (this.y - a.y) ** 2 + (this.z - a.z) ** 2);
  };
  /**
   * Sets the magnitude of the vector without changing the direction
   */
  public setMag = (a: number) => {
    this.normalize();
    this.scalar(a);
  };
  /**
   * Creates a random Vector
   * @param min Number
   * @param max Number
   * @returns A random Vector
   */
  public static randSigned = (val: number): Vector => {
    const x = (Math.random() - 0.5) * val * 2;
    const y = (Math.random() - 0.5) * val * 2;
    const z = (Math.random() - 0.5) * val * 2;
    return new Vector(x, y, z);
  };
  /**
   * Returns a randomized vector
   * @param min
   * @param max
   * @returns
   */
  public static rand = (val: number): Vector => {
    const x = Math.random() * val;
    const y = Math.random() * val;
    const z = Math.random() * val;
    return new Vector(x, y, z);
  };
  /**
   * Returns subtraction of 2 vectors
   */
  public static VecFromSub = (b1: Vector, b2: Vector): Vector => {
    const x = b2.x - b1.x;
    const y = b2.y - b1.y;
    const z = b2.z - b1.z;
    return new Vector(x, y, z);
  };
  /**
   * Returns addition of 2 vectors
   */
  public static VecFromAdd = (b1: Vector, b2: Vector): Vector => {
    const x = b2.x + b1.x;
    const y = b2.y + b1.y;
    const z = b2.z + b1.z;
    return new Vector(x, y, z);
  };
  /**
   * Returns a normalized form of a given vector
   */
  public static getNormalized = (v: Vector): Vector => {
    return new Vector(v.x / v.mag, v.y / v.mag, v.z / v.mag);
  };
  /**
   * Rotates Vector, preserves magnitude
   * @param angle Number
   */
  public rotate = (angle: number) => {
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);
    this.x = this.x * cos - this.y * sin;
    this.y = this.x * sin + this.y * cos;
  };
  public getNegative = () => {
    return new Vector(-this.x, -this.y, -this.z);
  };
  /**
   * Finds the average of all provided vectors
   * @param vals : Vector[] 
   * @returns Vector
   */
  public static getAverage = (vals:Vector[]):Vector=>{
    const avg = new Vector()
    vals.forEach((val:Vector)=>{
      avg.add(val)
    })
    avg.scalar(vals.length)
    return(avg)
  }
  /**
   * Clones the Vector
   * @returns cloned Vector
   */
  public clone = (): Vector => {
    return new Vector(this.x, this.y, this.z);
  };
}
