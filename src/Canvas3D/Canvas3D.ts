import { Canvas } from '../Canvas';
import { Vector } from '../Vector';
import { Body } from './Body';
import { ViewPoint } from './ViewPoint';

export class Canvas3D {
  private canvas: Canvas = new Canvas();
  private size: Vector = new Vector(100, 100);
  private camera: ViewPoint = new ViewPoint();
  private bodies: Body[] = [];
  private forces: Vector[] = [];
  private environmentForces: Vector = new Vector();
  constructor(parent: HTMLElement = document.body) {
    parent.append(this.canvas.dom);
  }
  public addBody = (bod: Body) => {
    this.bodies.push(bod);
  };
  private calculateEnvironmentForce = () => {
    this.environmentForces.scalar(0);
    this.forces.forEach((force: Vector) => {
      this.environmentForces.add(force);
    });
  };
  public addEnvironmentForce = (force: Vector) => {
    this.forces.push(force);
    this.calculateEnvironmentForce();
  };
  public draw = () => {
    this.bodies.forEach((body: Body) => {
      body.draw(this.canvas);
    });
  };
  public update = () => {
    this.bodies.forEach((body: Body) => {
      body.update();
    });
  };
  public animate = () => {
    this.canvas.clear();
    this.update();
    this.draw();
  };
}
