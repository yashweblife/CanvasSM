import { Vector } from './Vector';
export declare class Spherical {
    r: number;
    theta: number;
    psy: number;
    constructor(r?: number, theta?: number, psy?: number);
    private recalib;
    add: (val: Spherical) => void;
    sub: (val: Spherical) => void;
    distance: (val: Spherical) => number;
    scalar: (val: number) => void;
    normalize: () => void;
    rotateX: (val: number) => void;
    rotateY: (val: number) => void;
    fromVector: (vec: Vector) => void;
    static getFromVector: (vec: Vector) => Spherical;
    static getToSpherical: (val: Spherical) => Vector;
    toVector: () => Vector;
}
