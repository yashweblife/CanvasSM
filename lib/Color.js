"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = void 0;
class Color {
    constructor(r = 0, g = 0, b = 0, a = 1) {
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.a = 1;
        this.recalib = () => {
            if (this.r > 255)
                this.r = 255;
            if (this.g > 255)
                this.g = 255;
            if (this.b > 255)
                this.b = 255;
            if (this.r < 0)
                this.r = 0;
            if (this.g < 0)
                this.g = 0;
            if (this.b < 0)
                this.b = 0;
        };
        this.add = (val) => {
            this.r += val.r;
            this.g += val.g;
            this.b += val.b;
            this.recalib();
        };
        this.scalar = (val) => {
            this.r *= val;
            this.g *= val;
            this.b *= val;
            this.recalib();
        };
        this.getColor = () => {
            return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
        };
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
        this.recalib();
    }
}
exports.Color = Color;
