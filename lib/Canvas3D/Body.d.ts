import { Canvas } from '../Canvas';
import { Vector } from '../Vector';
import { Face } from './Face';
export declare class Body {
    faces: Face[];
    position: Vector;
    angularPosition: Vector;
    angularVelocity: Vector;
    angularAcceleration: Vector;
    constructor(faces: Face[], position: Vector);
    draw: (c: Canvas) => void;
    rotate: (vector: Vector) => void;
    update: () => void;
    static makeBox: (center?: Vector, size?: Vector) => void;
}
