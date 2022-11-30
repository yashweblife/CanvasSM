import { Canvas } from './Canvas';
import { Color } from './Color';
import { PhysicsObject } from './PhysicsObject';
import { Vector } from './Vector';
export declare class Wall extends PhysicsObject {
    color: Color;
    constructor(pos: Vector, end: Vector);
    setColor: (val: Color) => void;
    checkIntersection: (val: PhysicsObject) => boolean;
    draw: (c: Canvas) => void;
}
