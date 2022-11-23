import { CircleInterface, RectInterface } from './interfaces';
import { Vector } from './Vector';
export declare class Canvas {
    dom: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    width: number;
    height: number;
    constructor(canvas?: HTMLCanvasElement, width?: number, height?: number);
    setSize: (w: number, h: number) => void;
    circle: ({ pos, size, fillColor, strokeColor, stroke, fill, }: CircleInterface) => void;
    rect: ({ pos, size, fillColor, strokeColor, stroke, fill, angle, }: RectInterface) => void;
    line: (v1: Vector, v2: Vector, color?: string) => void;
    fillPath: (vec: Vector[], color?: string) => void;
    clear: () => void;
    fadeClear: () => void;
    drawImage: (img: HTMLVideoElement) => void;
    getImageData: () => ImageData;
    pixel: (pos: Vector, color: Vector) => void;
}
