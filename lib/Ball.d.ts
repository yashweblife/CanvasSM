import { Canvas } from './Canvas';
import { Color } from './Color';
import { PhysicsObject } from './PhysicsObject';
import { Vector } from './Vector';
export declare class Ball extends PhysicsObject {
    color: Color;
    size: number;
    constructor(pos?: Vector);
    setColor: (val?: Color) => void;
    draw: (c: Canvas) => void;
    checkCollision: (val: Ball) => boolean;
    update: () => void;
    static generate: (quantity: number, size: Vector) => Ball[];
}
