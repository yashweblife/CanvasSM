import { Vector } from './Vector';
export declare class Polar {
    r: number;
    theta: number;
    constructor(r?: number, theta?: number);
    static getRad: (deg: number) => number;
    static getDeg: (rad: number) => number;
    add: (val: Polar) => void;
    sub: (val: Polar) => void;
    scalar: (val: number) => void;
    toVector: () => Vector;
    static fromVector: (val: Vector) => Polar;
    normalize: () => void;
    static rand: () => Polar;
    static randSigned: () => Polar;
    clone: () => Polar;
    negative: () => void;
    static generateRand: (size: number, max: number) => Polar[];
    static generateRandSigned: (size: number, max: number) => Polar[];
}
