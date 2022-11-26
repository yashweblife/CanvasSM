/**
 * # Color
 */
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
  public maximize = () => {
    if (this.r > this.g && this.r > this.b) {
      this.r = 1;
      this.g = 0;
      this.b = 0;
    } else if (this.g > this.r && this.g > this.b) {
      this.r = 0;
      this.g = 1;
      this.b = 0;
    } else if (this.b > this.r && this.b > this.g) {
      this.r = 0;
      this.g = 0;
      this.b = 1;
    }
    this.scalar(255);
  };
  public minimize = () => {
    if (this.r < this.g && this.r < this.b) {
      this.r = 1;
      this.g = 0;
      this.b = 0;
    } else if (this.g < this.r && this.g < this.b) {
      this.r = 0;
      this.g = 1;
      this.b = 0;
    } else if (this.b < this.r && this.b < this.g) {
      this.r = 0;
      this.g = 0;
      this.b = 1;
    }
    this.scalar(255);
  };
  public complement = () => {
    const r = 0.5 + (0.5 - this.r / 255) * 255;
    const g = 0.5 + (0.5 - this.g / 255) * 255;
    const b = 0.5 + (0.5 - this.b / 255) * 255;
    return new Color(Math.round(r), Math.round(g), Math.round(b));
  };
  public generateSimilar = (size: number): Color[] => {
    const output: Color[] = [];
    for (let i = 0; i < size; i++) {
      const mux = i / 10;
      const r = this.r / 255 + mux;
      const g = this.g / 255 + mux;
      const b = this.b / 255 + mux;
      output.push(new Color(r * 255, g * 255, b * 255));
    }
    return output;
  };
  public getColor = () => {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  };
  public toGreyScale = () => {
    const avg = (this.r + this.g + this.b) / 3;
    this.r = avg;
    this.g = avg;
    this.b = avg;
  };
  public getBrightness = (): number => {
    const output: number = 0;
    return output;
  };
  public static rand = (val: number) => {
    return new Color(Math.floor(Math.random() * val), Math.floor(Math.random() * val), Math.floor(Math.random() * val));
  };
  public dist = (val: Color): number => {
    return Math.sqrt((this.r - val.r) ** 2 + (this.g - val.g) ** 2 + (this.b - val.b) ** 2);
  };
}
