import { Vector } from './Vector';
export declare class Polar {
    r: number;
    theta: number;
    constructor(r?: number, theta?: number);
    getRad: (deg: number) => number;
    getDeg: (rad: number) => number;
    add: (val: Polar) => void;
    scalar: (val: number) => void;
    toVector: () => Vector;
    static fromVector: (val: Vector) => Polar;
    normalize: () => void;
    rand: () => Polar;
    randSigned: () => Polar;
    clone: () => Polar;
    negative: () => void;
    static generateRand: (size: number, max: number) => Polar[];
    static generateRandSigned: (size: number, max: number) => Polar[];
}
