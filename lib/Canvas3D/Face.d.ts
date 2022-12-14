import { Canvas } from '../Canvas';
import { Vector } from '../Vector';
export declare class Face {
    vertices: Vector[];
    constructor(vertices: Vector[]);
    rotate: (vector: Vector) => void;
    draw: (c: Canvas) => void;
}
