import { Vector } from "./Vector";

export class Canvas {
  private size: Vector = new Vector(200, 200);
  private dom: HTMLCanvasElement = document.createElement("canvas");
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
}
