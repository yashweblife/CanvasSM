import { Vector } from './Vector';
export declare class PhysicsObject {
    pos: Vector;
    vel: Vector;
    acc: Vector;
    mass: number;
    size: number;
    charge: number;
    rigidBody: boolean;
    addForce: (v: Vector) => void;
    dist: (b: PhysicsObject) => number;
    attract: (b: PhysicsObject, f?: number) => void;
    repel: (b: PhysicsObject, f?: number) => void;
    /**
     * ## Attraction Behaviour
     * Attracts the ball to another ball
     * @param b Ball to get attracted to
     */
    attractGravo: (b: PhysicsObject) => void;
    /**
     * ## Repulsion Behaviour
     * Repels a physics object
     */
    repelGravo: (b: PhysicsObject) => void;
    chargeInteraction: (b: PhysicsObject) => void;
}
