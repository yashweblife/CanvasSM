import { Vector } from '../Vector';

export class RenderOptions {
  public static project = (
    vector: Vector,
    cameraPosition: Vector = new Vector(100, 100),
    distance: number = 200,
  ): Vector => {
    const r = distance / vector.y;
    return new Vector(r * vector.x, r * vector.z);
  };
}
