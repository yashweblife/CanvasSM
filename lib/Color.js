"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = void 0;
/**
 * # Color
 */
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
        this.maximize = () => {
            if (this.r > this.g && this.r > this.b) {
                this.r = 1;
                this.g = 0;
                this.b = 0;
            }
            else if (this.g > this.r && this.g > this.b) {
                this.r = 0;
                this.g = 1;
                this.b = 0;
            }
            else if (this.b > this.r && this.b > this.g) {
                this.r = 0;
                this.g = 0;
                this.b = 1;
            }
            this.scalar(255);
        };
        this.minimize = () => {
            if (this.r < this.g && this.r < this.b) {
                this.r = 1;
                this.g = 0;
                this.b = 0;
            }
            else if (this.g < this.r && this.g < this.b) {
                this.r = 0;
                this.g = 1;
                this.b = 0;
            }
            else if (this.b < this.r && this.b < this.g) {
                this.r = 0;
                this.g = 0;
                this.b = 1;
            }
            this.scalar(255);
        };
        this.complement = () => {
            const r = 0.5 + (0.5 - this.r / 255) * 255;
            const g = 0.5 + (0.5 - this.g / 255) * 255;
            const b = 0.5 + (0.5 - this.b / 255) * 255;
            return new Color(Math.round(r), Math.round(g), Math.round(b));
        };
        this.generateSimilar = (size) => {
            const output = [];
            for (let i = 0; i < size; i++) {
                const mux = i / 10;
                const r = this.r / 255 + mux;
                const g = this.g / 255 + mux;
                const b = this.b / 255 + mux;
                output.push(new Color(r * 255, g * 255, b * 255));
            }
            return output;
        };
        this.getColor = () => {
            return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
        };
        this.toGreyScale = () => {
            const avg = (this.r + this.g + this.b) / 3;
            this.r = avg;
            this.g = avg;
            this.b = avg;
        };
        this.getBrightness = () => {
            const output = 0;
            return output;
        };
        this.dist = (val) => {
            return Math.sqrt(Math.pow((this.r - val.r), 2) + Math.pow((this.g - val.g), 2) + Math.pow((this.b - val.b), 2));
        };
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
        this.recalib();
    }
}
exports.Color = Color;
Color.rand = (val) => {
    return new Color(Math.floor(Math.random() * val), Math.floor(Math.random() * val), Math.floor(Math.random() * val));
};
