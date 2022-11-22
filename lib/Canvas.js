"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Canvas = void 0;
const Vector_1 = require("./Vector");
class Canvas {
    constructor(parent = document.body) {
        this.size = new Vector_1.Vector(200, 200);
        this.dom = document.createElement("canvas");
        this.recalib = () => {
            this.dom.width = this.size.x;
            this.dom.height = this.size.y;
        };
        this.setSize = (val = new Vector_1.Vector(200, 200)) => {
            this.size = val;
            this.recalib();
        };
        parent.append(this.dom);
        this.recalib();
    }
}
exports.Canvas = Canvas;
