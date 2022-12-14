import { Canvas } from './Canvas';
import { Vector } from './Vector';
export class Body {
  public vertices: Vector[] = [];
  public faces: Vector[][] = [];
  public position: Vector = new Vector();
  public angularPosition: Vector = new Vector();
  public angularVelocity: Vector = new Vector();
  public angularAcceleration: Vector = new Vector();
}
export class Camera {
  public position: Vector = new Vector();
  public scale: number = 200;
}
export class Canvas3D {
  private canvas: Canvas = new Canvas();
  private size: Vector = new Vector(100, 100);
  private camera: Camera = new Camera();
  private bodies: Body[] = [];
  constructor(parent: HTMLElement = document.body) {
    parent.append(this.canvas.dom);
  }
  public addBody = (bod: Body) => {
    this.bodies.push(bod);
  };
  private animate = () => {};
}
