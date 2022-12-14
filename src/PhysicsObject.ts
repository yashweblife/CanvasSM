import { Vector } from './Vector';
export class PhysicsObject {
  public pos: Vector = new Vector();
  public vel: Vector = new Vector();
  public acc: Vector = new Vector();
  public mass: number = 1;
  public size: number | Vector = 1;
  public charge: number = 0;
  public rigidBody: boolean = false;
  public addForce = (v: Vector) => {
    this.acc.add(v);
  };
  public dist = (b: PhysicsObject): number => {
    return this.pos.dist(b.pos);
  };
  public attract = (b: PhysicsObject, f: number = 0.9) => {
    const nVec = Vector.VecFromSub(this.pos, b.pos);
    nVec.normalize();
    nVec.scalar(f);
    this.addForce(nVec);
  };
  public repel = (b: PhysicsObject, f: number = 0.9) => {
    const nVec = Vector.VecFromSub(b.pos, this.pos);
    nVec.normalize();
    nVec.scalar(f);
    this.addForce(nVec);
  };
  /**
   * ## Attraction Behaviour
   * Attracts the ball to another ball
   * @param b Ball to get attracted to
   */
  public attractGravo = (b: PhysicsObject) => {
    const nVec = Vector.VecFromSub(this.pos, b.pos);
    let dist = this.pos.dist(b.pos);
    const f = 0.0001;
    if (this.size instanceof Vector) {
      if (dist < this.size.mag) {
        dist = this.size.mag;
      }
    } else {
      if (dist < this.size) {
        dist = this.size;
      }
    }
    nVec.normalize();
    nVec.scalar((f * this.mass * b.mass) / dist);
    this.addForce(nVec);
  };
  /**
   * ## Repulsion Behaviour
   * Repels a physics object
   */
  public repelGravo = (b: PhysicsObject) => {
    const nVec = Vector.VecFromAdd(this.pos, b.pos);
    let dist = this.pos.dist(b.pos);
    const f = 0.1;
    if (this.size instanceof Vector) {
      if (dist === 0) {
        dist = this.size.mag;
      }
    } else {
      if (dist === 0) {
        dist = this.size;
      }
    }
    nVec.normalize();
    nVec.scalar((f * this.mass) / dist ** 2);
    this.addForce(nVec);
  };
  public chargeInteraction = (b: PhysicsObject) => {
    if ((b.charge > 0 && this.charge > 0) || (b.charge < 0 && this.charge < 0)) {
      this.repel(b, this.charge * b.charge);
    } else {
      this.attract(b, this.charge * b.charge);
    }
  };
}
