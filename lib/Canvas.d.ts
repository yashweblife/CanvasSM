import { CircleInterface, RectInterface } from './interfaces';
import { Vector } from './Vector';
/**
 * ## Canvas
 * Utility functions:
 * - setSize: (w,h)=>void sets height
 * - pixel: (pos:Vector, color:Vector)=>void draws pixel
 * - circle: (CircleInterface)=>void makes circle
 * - rect: (RectInterface)=>void makes rect
 * - line: (LineInterface)=>void makes line
 * - fillPath: (vec: Vector[], color: string)=>void makes filled path
 * - clear: ()=>void clears screen
 * - fadeClear: ()=>void fades screen to clear
 * - drawImage: (img: HTMLVideoElement | HTMLCanvasElement | HTMLImageElement)=>void draws image on canvas
 * - getImageData: ()=>ImageData returns canvas image data
 */
export declare class Canvas {
    dom: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    width: number;
    height: number;
    constructor(canvas?: HTMLCanvasElement, width?: number, height?: number);
    setSize: (w: number, h: number) => void;
    pixel: (pos: Vector, color: Vector) => void;
    circle: ({ pos, size, fillColor, strokeColor, stroke, fill, }: CircleInterface) => void;
    rect: ({ pos, size, fillColor, strokeColor, stroke, fill, angle, }: RectInterface) => void;
    line: (v1: Vector, v2: Vector, color?: string) => void;
    fillPath: (vec: Vector[], color?: string) => void;
    clear: () => void;
    fadeClear: () => void;
    drawImage: (img: HTMLVideoElement | HTMLCanvasElement | HTMLImageElement) => void;
    getImageData: () => ImageData;
}
