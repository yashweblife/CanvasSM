"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Canvas = void 0;
const Vector_1 = require("./Vector");
class Canvas {
    constructor(canvas = document.createElement('canvas'), width = 300, height = 300) {
        this.setSize = (w, h) => {
            this.dom.width = w;
            this.dom.height = h;
            this.width = w;
            this.height = h;
        };
        this.circle = ({ pos = new Vector_1.Vector(0, 0), size = 5, fillColor = 'red', strokeColor = 'black', stroke = false, fill = true, }) => {
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
        this.rect = ({ pos = new Vector_1.Vector(0, 0), size = new Vector_1.Vector(100, 100), fillColor = 'red', strokeColor = 'black', stroke = false, fill = true, angle = 0, }) => {
            this.ctx.save();
            this.ctx.rotate(angle);
            this.ctx.beginPath();
            this.ctx.fillStyle = fillColor;
            this.ctx.strokeStyle = strokeColor;
            this.ctx.rect(pos.x, pos.y, size.x, size.y);
            this.ctx.closePath();
            if (fill === true)
                this.ctx.fill();
            if (stroke === true)
                this.ctx.stroke();
            this.ctx.restore();
        };
        this.line = (v1, v2, color = 'rgba(0,0,0,0.5)') => {
            this.ctx.beginPath();
            this.ctx.strokeStyle = color;
            this.ctx.moveTo(v1.x, v1.y);
            this.ctx.lineTo(v2.x, v2.y);
            this.ctx.closePath();
            this.ctx.stroke();
        };
        // public reverseRect = ({pos, size, fillColor, strokeColor, stroke, fill, angle})=>{}
        this.fillPath = (vec, color = 'red') => {
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
        this.clear = () => {
            this.ctx.clearRect(0, 0, this.width, this.height);
        };
        this.fadeClear = () => {
            this.ctx.fillStyle = 'rgba(255,255,255,0.01)';
            this.ctx.rect(0, 0, this.width, this.height);
            this.ctx.fill();
        };
        this.drawImage = (img) => {
            this.ctx.drawImage(img, 0, 0, this.width, this.height);
        };
        this.getImageData = () => {
            const img = this.ctx.getImageData(0, 0, this.width, this.height, {
                willReadFrequently: true,
            });
            return img;
        };
        this.pixel = (pos, color) => {
            this.ctx.beginPath();
            this.ctx.fillStyle = `rgb(${color.x}, ${color.y},${color.z})`;
            this.ctx.rect(pos.x, pos.y, 1, 1);
            this.ctx.closePath();
            this.ctx.fill();
        };
        this.dom = canvas;
        this.dom.width = width;
        this.dom.height = height;
        this.ctx = this.dom.getContext('2d');
        this.width = this.dom.width;
        this.height = this.dom.height;
    }
}
exports.Canvas = Canvas;
