
export default class Canvas {
    public width=500;
    public height=500;
    public dom: HTMLCanvasElement;
    public c: CanvasRenderingContext2D;
    /**
     * 
     * @param dom Specify if the element is available in the DOM, use query string
     * example: '#canvas' or '.canvas', if not provided, a new canvas will be created.
     * In that case you will need to set parent element for the canvas.
     * ```
     * const canvas = new Canvas('#your-canvas-element')
     * // or
     * const canvas = new Canvas()
     * canvas.parent = '#your-parent-element'
     * 
     * 
     * ```
     */
    constructor(dom?: string) {
        if(dom){
            this.dom = document.querySelector(dom) as HTMLCanvasElement
        }else {
            this.dom = document.createElement('canvas')
        }
        this.dom.width = this.width
        this.dom.height = this.height
        this.c = this.dom.getContext('2d') as CanvasRenderingContext2D;
    }
    /**
     * Specify the parent element for the canvas.
     * @param parent Specify the parent element's selector.
     * @example
     * 
     */
    set parent(parent: string) {
        document.querySelector(parent)?.appendChild(this.dom)
    }
    set size(size: number[]) {
        this.width = size[0]
        this.height = size[1]
        this.dom.width = this.width
        this.dom.height = this.height
    }
    /**
     * Starts a new path.
     * The `beginPath()` method begins a new path, or resets the current path.
     * It must be called before drawing any shapes.
     */
    start() {
        this.c.beginPath();
    }
    /**
     * Close the current path and draw it.
     * The `closePath()` method causes the point of the pen to be drawn back to the starting point of the current sub-path.
     * It tries to draw a straight line from the current point to the start.
     * If the shape has already been closed or has only one point, this function does nothing.
     */
    end() {
        this.c.closePath();
    }
    
    /**
     * Draw a circle
     * @param x x coordinate of the center of the circle
     * @param y y coordinate of the center of the circle
     * @param r radius of the circle
     * @param color color of the circle
     * @param fill if true, the circle will be filled, otherwise it will be outlined
     */
    circle(x:number, y:number, r:number, color='red', fill=false) {
        this.c.beginPath();
        this.c[fill ? 'fillStyle' : 'strokeStyle'] = color;
        this.c.arc(x, y, r, 0, 2 * Math.PI);        
        this.c[fill ? 'fill' : 'stroke']();
        this.c.closePath();
    }
    /**
     * Draw a line
     * @param x1 x coordinate of the start of the line
     * @param y1 y coordinate of the start of the line
     * @param x2 x coordinate of the end of the line
     * @param y2 y coordinate of the end of the line
     * @param color color of the line
     */
    line(x1:number, y1:number, x2:number, y2:number, color='red') {
        this.c.beginPath();
        this.c.strokeStyle = color
        this.c.moveTo(x1, y1);
        this.c.lineTo(x2, y2);
        this.c.stroke();
        this.c.closePath();
    }
    /**
     * Draw a rectangle
     * @param x1 x coordinate of the top left of the rectangle
     * @param y1 y coordinate of the top left of the rectangle
     * @param x2 x coordinate of the bottom right of the rectangle
     * @param y2 y coordinate of the bottom right of the rectangle
     * @param color color of the rectangle
     * @param fill if true, the rectangle will be filled, otherwise it will be outlined
     */
    rect(x1:number, y1:number, x2:number, y2:number, color='red', fill=false) {
        this.c.beginPath();
        this.c[fill ? 'fillStyle' : 'strokeStyle'] = color;
        this.c.rect(x1, y1, x2, y2);
        this.c[fill ? 'fill' : 'stroke']();
        this.c.closePath();
    }
    clear(){
        this.c.clearRect(0, 0, this.width, this.height)
    }
    clearArea(x1:number, y1:number, x2:number, y2:number){
        this.c.clearRect(x1, y1, x2, y2)
    }
    bg(color: string) {
        this.c.fillStyle = color;
        this.c.fillRect(0, 0, this.width, this.height);
    }
}