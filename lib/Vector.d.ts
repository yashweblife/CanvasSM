export declare class Vector {
    x: number;
    y: number;
    z: number;
    mag: number;
    constructor(x?: number, y?: number, z?: number);
    private recalib;
    add: (val: Vector) => void;
    scalar: (val: number) => void;
    normalize: () => void;
    setMag: (val: number) => void;
    clone: () => Vector;
    static fromPolar: (r: number, theta: number) => Vector;
    static toPolar: (val: Vector) => {
        r: number;
        theta: number;
    };
    static rand: (val: number) => Vector;
    static randSigned: (val: number) => Vector;
    static randArray: (size: number, val: number) => Vector[];
    static randSignedArray: (size: number, val: number) => Vector[];
}
