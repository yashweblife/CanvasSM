import { Vector } from "./Vector";
export declare class Canvas {
    private size;
    private dom;
    constructor(parent?: HTMLElement);
    private recalib;
    setSize: (val?: Vector) => void;
}
