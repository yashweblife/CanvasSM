export class Vector {
  public x: number = 0;
  public y: number = 0;
  public z: number = 0;
  public mag: number = 0;
  constructor(x: number = 0, y: number = 0, z: number = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.recalib();
  }
  private recalib = () => {
    this.mag = Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
  };
  public add = (val: Vector) => {
    this.x += val.x;
    this.y += val.y;
    this.z += val.z;
    this.recalib();
  };
  public scalar = (val: number) => {
    this.x *= val;
    this.y *= val;
    this.z *= val;
    this.recalib();
  };
  public normalize = () => {
    this.scalar(this.mag);
    this.recalib();
  };
  public setMag = (val: number) => {
    this.normalize();
    this.scalar(val);
  };
  public clone = () => {
    return new Vector(this.x, this.y, this.z);
  };
  public static rand = (val: number) => {
    return new Vector(
      Math.random() * val,
      Math.random() * val,
      Math.random() * val
    );
  };
  public static randSigned = (val: number) => {
    return new Vector(
      (Math.random() - 0.5) * 2 * val,
      (Math.random() - 0.5) * 2 * val,
      (Math.random() - 0.5) * 2 * val
    );
  };
  public static randArray = (size: number, val: number) => {
    const output: Vector[] = [];
    for (var i = 0; i < size; i++) {
      output.push(Vector.rand(val));
    }
    return output;
  };
  public static randSignedArray = (size: number, val: number) => {
    const output: Vector[] = [];
    for (var i = 0; i < size; i++) {
      output.push(Vector.randSigned(val));
    }
    return output;
  };
}
