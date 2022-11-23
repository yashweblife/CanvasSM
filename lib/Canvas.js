"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Canvas = void 0;
const Vector_1 = require("./Vector");
class Canvas {
    constructor(parent = document.body) {
        this.size = new Vector_1.Vector(200, 200);
        this.dom = document.createElement("canvas");
        this.c = this.dom.getContext("2d");
        this.recalib = () => {
            this.dom.width = this.size.x;
            this.dom.height = this.size.y;
        };
        this.setSize = (val = new Vector_1.Vector(200, 200)) => {
            this.size = val;
            this.recalib();
        };
        this.bound = () => {
            const data = this.dom.getBoundingClientRect();
            return {
                top: data.top,
                bottom: data.bottom,
                left: data.left,
                right: data.right,
            };
        };
        this.circle = (data) => {
            this.c.beginPath();
            this.c.arc(data.pos.x, data.pos.y, data.size, 0, Math.PI * 2, false);
            this.c.closePath();
            if (data.fill) {
                this.c.fillStyle = data.fillColor ? data.fillColor : "red";
                this.c.fill();
            }
            if (data.stroke) {
                this.c.strokeStyle = data.strokeColor ? data.strokeColor : "black";
                this.c.stroke();
            }
        };
        this.line = (a, b, color = "black") => {
            this.c.beginPath();
            this.c.moveTo(a.x, a.y);
            this.c.lineTo(b.x, b.y);
            this.c.closePath();
            this.c.strokeStyle = color;
            this.c.stroke();
        };
        this.clear = () => {
            this.c.clearRect(0, 0, this.size.x, this.size.y);
        };
        parent.append(this.dom);
        this.recalib();
    }
}
exports.Canvas = Canvas;
