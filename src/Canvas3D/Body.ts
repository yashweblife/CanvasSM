import { Canvas } from '../Canvas';
import { Vector } from '../Vector';
import { Face } from './Face';

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
  public rotate = (vector: Vector) => {
    this.faces.forEach((face: Face) => {
      face.rotate(vector);
    });
  };
  public update = () => {
    this.angularVelocity.add(this.angularAcceleration);
    this.angularPosition.add(this.angularVelocity);
    this.rotate(this.angularPosition);
    this.angularAcceleration.scalar(0);
  };
  public static makeBox = (center: Vector = new Vector(), size: Vector = new Vector(1, 1, 1)): Body => {
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
        v[0], // front
      ],
      [
        v[0],
        v[1],
        v[4],
        v[5],
        v[0], // right
      ],
      [
        v[5],
        v[4],
        v[6],
        v[7],
        v[5], // back
      ],
      [
        v[7],
        v[6],
        v[2],
        v[3],
        v[7], // left
      ],
      [
        v[0],
        v[5],
        v[7],
        v[3],
        v[0], // top
      ],
      [
        v[1],
        v[4],
        v[6],
        v[2],
        v[1], // bottom
      ],
    ];
    const finalFaces: Face[] = [];
    faces.forEach((f: Vector[]) => {
      f.forEach((vec: Vector) => {
        vec.x *= size.x;
        vec.y *= size.y;
        vec.z *= size.z;
      });
      finalFaces.push(new Face(f));
    });
    return new Body(finalFaces, center);
  };
}
