import { Polar } from './Polar';
import { Vector } from './Vector';
export declare class Spherical {
    r: number;
    theta: number;
    psy: number;
    constructor(r?: number, theta?: number, psy?: number);
    private recalib;
    add: (val: Spherical) => void;
    sub: (val: Spherical) => void;
    dist: (val: Spherical) => number;
    distFromPolar: (val: Polar) => number;
    distFromVector: (val: Vector) => number;
    scalar: (val: number) => void;
    normalize: () => void;
    rotateX: (val: number) => void;
    rotateY: (val: number) => void;
    fromVector: (vec: Vector) => void;
    static getFromVector: (vec: Vector) => Spherical;
    static getToSpherical: (val: Spherical) => Vector;
    toVector: () => Vector;
}
