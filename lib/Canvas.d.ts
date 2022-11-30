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
    /**
     * ## setSize
     * Sets the size of the canvas
     * ```javascript
     * var canvas = new Canvas()
     * canvas.setSize(500,500)
     * ```
     * @param w width
     * @param h height
     */
    setSize: (w: number, h: number) => void;
    /**
     * ## pixel
     * Draws a pixel on a given vector and with a given color
     * ```javascript
     * canvas.pixel(new Vector(10,10))
     * canvas.pixel(new Vector(10,10),new Vector(10,255,100))
     * ```
     * @param pos
     * @param color
     */
    pixel: (pos: Vector, color: Vector) => void;
    /**
     * ## circle
     * Draws a circle around a given vector, and a provided radius
     * ```javascript
     * canvas.circle({
     *  pos:new Vector(10,10),
     *  size:10,
     *  fillColor:'red'
     *  fill:true
     * })
     * ```
     * @param param0 : {pos, size, fillColor, strokeColor, fill, stroke}
     */
    circle: ({ pos, size, fillColor, strokeColor, stroke, fill, }: CircleInterface) => void;
    /**
     * ## rect
     * Draws a rect from a pos with the provided size
     * ```javascript
     * canvas.rect({
     *  pos:new Vector(10,10),
     *  size:new Vector(100,200),
     *  fillStyle:'green',
     *  fill:true
     * })
     * ```
     * @param param0 {pos,size,fillColor,strokeColor,fill,stroke,angle[NOT ENABLED]}
     */
    rect: ({ pos, size, fillColor, strokeColor, stroke, fill, angle, }: RectInterface) => void;
    /**
     * ## line
     * Draws a line from v1 to v2
     * ```javascript
     * canvas.line(new Vector(0,0), new Vector(100,100))
     * canvas.line(new Vector(0,0), new Vector(100,100), 'green')
     * ```
     * @param v1
     * @param v2
     * @param color
     */
    line: (v1: Vector, v2: Vector, color?: string) => void;
    /**
     * ## fillPath
     * Draws a given path of vectors
     * ```javascript
     * canvas.fillPath([
     * new Vector(0,0),
     * new Vector(10,0),
     * new Vector(10,10),
     * new Vector(0,10)
     * ])
     * ```
     * @param vec Array of vector points
     * @param color default red
     */
    fillPath: (vec: Vector[], color?: string) => void;
    /**
     * ## clear
     * Clears the canvas
     * ```javascript
     * canvas.clear()
     * ```
     */
    clear: () => void;
    /**
     * ## fadeClear
     * Fades the canvas
     * ```javascript
     * canvas.fadeClear()
     * ```
     */
    fadeClear: () => void;
    /**
     * # drawImage
     * Draws an image onto the canvas
     * ```javascript
     * canvas.drawImage(document.querySelector('#image'))
     * ```
     * @param img
     */
    drawImage: (img: HTMLVideoElement | HTMLCanvasElement | HTMLImageElement, pos?: Vector, size?: Vector) => void;
    /**
     * getImageData
     * Returns the current image state of the canvas
     * ```javascript
     * canvas.getImageData
     * ```
     * @returns ImageData
     */
    getImageData: () => ImageData;
}
