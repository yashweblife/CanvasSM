import { CircleInterface } from './interfaces';
import { Vector } from './Vector';

export class Canvas {
  private size: Vector = new Vector(200, 200);
  private dom: HTMLCanvasElement = document.createElement('canvas');
  private c: CanvasRenderingContext2D = this.dom.getContext('2d')!;
  constructor(parent: HTMLElement = document.body) {
    parent.append(this.dom);
    this.recalib();
  }
  private recalib = () => {
    this.dom.width = this.size.x;
    this.dom.height = this.size.y;
  };
  public setSize = (val: Vector = new Vector(200, 200)) => {
    this.size = val;
    this.recalib();
  };
  public bound = () => {
    const data: DOMRect = this.dom.getBoundingClientRect();
    return {
      top: data.top,
      bottom: data.bottom,
      left: data.left,
      right: data.right,
    };
  };
  public circle = (data: CircleInterface) => {
    this.c.beginPath();
    this.c.arc(data.pos.x, data.pos.y, data.size, 0, Math.PI * 2, false);
    this.c.closePath();
    if (data.fill) {
      this.c.fillStyle = data.fillColor ? data.fillColor : 'red';
      this.c.fill();
    }
    if (data.stroke) {
      this.c.strokeStyle = data.strokeColor ? data.strokeColor : 'black';
      this.c.stroke();
    }
  };
  public line = (a: Vector, b: Vector, color: string = 'black') => {
    this.c.beginPath();
    this.c.moveTo(a.x, a.y);
    this.c.lineTo(b.x, b.y);
    this.c.closePath();
    this.c.strokeStyle = color;
    this.c.stroke();
  };
  public clear = () => {
    this.c.clearRect(0, 0, this.size.x, this.size.y);
  };
}
