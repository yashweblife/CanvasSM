export declare class Color {
    r: number;
    g: number;
    b: number;
    a: number;
    constructor(r?: number, g?: number, b?: number, a?: number);
    private recalib;
    add: (val: Color) => void;
    scalar: (val: number) => void;
    getColor: () => string;
}
