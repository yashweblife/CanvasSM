import { Canvas } from "../Canvas";
import { Vector } from "../Vector";
import { RenderOptions } from "./RenderOptions";

export class Face {
  public vertices: Vector[] = [];
  constructor(vertices: Vector[]) {
    this.vertices = vertices;
  }
  public rotate = (vector: Vector) => {
    this.vertices.forEach((val: Vector) => {
      val.rotate(vector);
    });
  };
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
