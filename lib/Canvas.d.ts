import { CircleInterface } from './interfaces';
import { Vector } from './Vector';
export declare class Canvas {
    private size;
    private dom;
    private c;
    constructor(parent?: HTMLElement);
    private recalib;
    setSize: (val?: Vector) => void;
    bound: () => {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    circle: (data: CircleInterface) => void;
    line: (a: Vector, b: Vector, color?: string) => void;
    clear: () => void;
}
