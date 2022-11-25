export class Color {
  public r: number = 0;
  public g: number = 0;
  public b: number = 0;
  public a: number = 1;
  constructor(r: number = 0, g: number = 0, b: number = 0, a: number = 1) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
    this.recalib();
  }
  private recalib = () => {
    if (this.r > 255) this.r = 255;
    if (this.g > 255) this.g = 255;
    if (this.b > 255) this.b = 255;
    if (this.r < 0) this.r = 0;
    if (this.g < 0) this.g = 0;
    if (this.b < 0) this.b = 0;
  };
  public add = (val: Color) => {
    this.r += val.r;
    this.g += val.g;
    this.b += val.b;
    this.recalib();
  };
  public scalar = (val: number) => {
    this.r *= val;
    this.g *= val;
    this.b *= val;
    this.recalib();
  };
  public getColor = () => {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  };
}
