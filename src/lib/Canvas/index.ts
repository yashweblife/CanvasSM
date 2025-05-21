export default class Canvas {
    public width=500;
    public height=500;
    public dom: HTMLCanvasElement;
    public c: CanvasRenderingContext2D;
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
}