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
export class Canvas {
  public dom: HTMLCanvasElement;
  public ctx: CanvasRenderingContext2D;
  public width: number;
  public height: number;
  constructor(canvas: HTMLCanvasElement = document.createElement('canvas'), width = 300, height = 300) {
    this.dom = canvas;
    this.dom.width = width;
    this.dom.height = height;
    this.ctx = this.dom.getContext('2d')!;
    this.width = this.dom.width;
    this.height = this.dom.height;
  }
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
  public setSize = (w: number, h: number) => {
    this.dom.width = w;
    this.dom.height = h;
    this.width = w;
    this.height = h;
  };
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
  public pixel = (pos: Vector, color: Vector) => {
    this.ctx.beginPath();
    this.ctx.fillStyle = `rgb(${color.x}, ${color.y},${color.z})`;
    this.ctx.rect(pos.x, pos.y, 1, 1);
    this.ctx.closePath();
    this.ctx.fill();
  };
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
  public circle = ({
    pos = new Vector(0, 0),
    size = 5,
    fillColor = 'red',
    strokeColor = 'black',
    stroke = false,
    fill = true,
  }: CircleInterface) => {
    this.ctx.beginPath();
    this.ctx.fillStyle = fillColor;
    this.ctx.strokeStyle = strokeColor;
    this.ctx.arc(pos.x, pos.y, size, 0, Math.PI * 2, false);
    this.ctx.closePath();
    if (fill) {
      this.ctx.fill();
    }
    if (stroke) {
      this.ctx.stroke();
    }
  };
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
  public rect = ({
    pos = new Vector(0, 0),
    size = new Vector(100, 100),
    fillColor = 'red',
    strokeColor = 'black',
    stroke = false,
    fill = true,
    angle = 0,
  }: RectInterface) => {
    this.ctx.save();
    this.ctx.rotate(angle);
    this.ctx.beginPath();
    this.ctx.fillStyle = fillColor;
    this.ctx.strokeStyle = strokeColor;
    this.ctx.rect(pos.x, pos.y, size.x, size.y);
    this.ctx.closePath();
    if (fill === true) this.ctx.fill();
    if (stroke === true) this.ctx.stroke();
    this.ctx.restore();
  };
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
  public line = (v1: Vector, v2: Vector, color: string = 'rgba(0,0,0,0.5)') => {
    this.ctx.beginPath();
    this.ctx.strokeStyle = color;
    this.ctx.moveTo(v1.x, v1.y);
    this.ctx.lineTo(v2.x, v2.y);
    this.ctx.closePath();
    this.ctx.stroke();
  };
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
  public fillPath = (vec: Vector[], color: string = 'red') => {
    this.ctx.beginPath();
    this.ctx.moveTo(vec[0].x, vec[0].y);
    for (let i = 1; i < vec.length; i++) {
      const v2 = vec[i];
      this.ctx.lineTo(v2.x, v2.y);
    }
    this.ctx.closePath();
    this.ctx.fillStyle = color;
    this.ctx.fill();
  };
  /**
   * ## clear
   * Clears the canvas
   * ```javascript
   * canvas.clear()
   * ```
   */
  public clear = () => {
    this.ctx.clearRect(0, 0, this.width, this.height);
  };
  /**
   * ## fadeClear
   * Fades the canvas
   * ```javascript
   * canvas.fadeClear()
   * ```
   */
  public fadeClear = () => {
    this.ctx.fillStyle = 'rgba(255,255,255,0.01)';
    this.ctx.rect(0, 0, this.width, this.height);
    this.ctx.fill();
  };
  /**
   * # drawImage
   * Draws an image onto the canvas
   * ```javascript
   * canvas.drawImage(document.querySelector('#image'))
   * ```
   * @param img
   */
  public drawImage = (img: HTMLVideoElement | HTMLCanvasElement | HTMLImageElement) => {
    this.ctx.drawImage(img, 0, 0, this.width, this.height);
  };
  /**
   * getImageData
   * Returns the current image state of the canvas
   * ```javascript
   * canvas.getImageData
   * ```
   * @returns ImageData
   */
  public getImageData = (): ImageData => {
    const img: ImageData = this.ctx.getImageData(0, 0, this.width, this.height, {
      willReadFrequently: true,
    } as ImageDataSettings);
    return img;
  };
}
