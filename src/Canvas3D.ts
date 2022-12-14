import { Canvas } from './Canvas';
import { Vector } from './Vector';
class RenderOptions {
  public static project = (
    vector: Vector,
    cameraPosition: Vector = new Vector(100, 100),
    distance: number = 200,
  ): Vector => {
    const r = distance / vector.y;
    return new Vector(r * vector.x, r * vector.z);
  };
}
export class Face {
  public vertices: Vector[] = [];
  constructor(vertices: Vector[]) {
    this.vertices = vertices;
  }
  public draw = (c: Canvas) => {
    c.begin();
    c.moveToVec(RenderOptions.project(this.vertices[0]));
    for (let i = 1; i < this.vertices.length; i++) {
      c.lineToVec(RenderOptions.project(this.vertices[i]));
    }
    c.close();
    c.stroke();
  };
}
export class Body {
  public faces: Face[] = [];
  public position: Vector = new Vector();
  public angularPosition: Vector = new Vector();
  public angularVelocity: Vector = new Vector();
  public angularAcceleration: Vector = new Vector();

  constructor(faces: Face[], position: Vector) {
    this.faces = faces;
    this.position = position;
  }
  public draw = (c: Canvas) => {
    this.faces.forEach((face: Face) => {
      face.draw(c);
    });
  };
  public rotate = (vector: Vector) => {};
  public update = () => {
    this.angularVelocity.add(this.angularAcceleration);
    this.angularPosition.add(this.angularVelocity);
    this.rotate(this.angularPosition);
    this.angularAcceleration.scalar(0);
  };
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
  private animate = () => {};
}
