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
  public static makeBox = (center: Vector = new Vector(), size: Vector = new Vector(1, 1, 1)) => {
    const v = [
      new Vector(1, 1, 1),
      new Vector(1, -1, 1),
      new Vector(-1, -1, 1),
      new Vector(-1, 1, 1),
      new Vector(1, -1, -1),
      new Vector(1, 1, -1),
      new Vector(-1, -1, -1),
      new Vector(-1, 1, -1),
    ];
    const faces = [
      [
        v[0],
        v[1],
        v[2],
        v[3],
        v[0], //front
      ],
      [
        v[0],
        v[1],
        v[4],
        v[5],
        v[0], //right
      ],
      [
        v[5],
        v[4],
        v[6],
        v[7],
        v[5], //back
      ],
      [
        v[7],
        v[6],
        v[2],
        v[3],
        v[7], //left
      ],
      [
        v[0],
        v[5],
        v[7],
        v[3],
        v[0], //top
      ],
      [
        v[1],
        v[4],
        v[6],
        v[2],
        v[1], //bottom
      ],
    ];
    const finalFaces:Face[] = [];
    faces.forEach((f: Vector[]) => {
      f.forEach((vec: Vector) => {
        vec.x *= size.x;
        vec.y *= size.y;
        vec.z *= size.z;
      });
      finalFaces.push(new Face(f));
      return(new Body(finalFaces, center))
    });
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
  private animate = () => {};
}
