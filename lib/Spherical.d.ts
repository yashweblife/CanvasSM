import { Vector } from './Vector';
export declare class Spherical {
    r: number;
    theta: number;
    psy: number;
    constructor(r?: number, theta?: number, psy?: number);
    private recalib;
    distance: (val: Spherical) => number;
    fromVector: (vec: Vector) => void;
    toVector: () => Vector;
}
