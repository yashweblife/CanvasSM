/**
 * # Color
 */
export declare class Color {
    r: number;
    g: number;
    b: number;
    a: number;
    constructor(r?: number, g?: number, b?: number, a?: number);
    private recalib;
    add: (val: Color) => void;
    scalar: (val: number) => void;
    maximize: () => void;
    minimize: () => void;
    complement: () => Color;
    generateSimilar: (size: number) => Color[];
    getColor: () => string;
    toGreyScale: () => void;
    getBrightness: () => number;
    static rand: (val: number) => Color;
    dist: (val: Color) => number;
}
