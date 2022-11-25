"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Polar = void 0;
const Vector_1 = require("./Vector");
class Polar {
    constructor(r = 0, theta = 0) {
        this.r = 0;
        this.theta = 0;
        this.getRad = (deg) => {
            return deg * (Math.PI / 180);
        };
        this.getDeg = (rad) => {
            return rad * (180 / Math.PI);
        };
        this.add = (val) => {
            this.r += val.r;
            this.theta += val.theta;
        };
        this.scalar = (val) => {
            this.r *= val;
        };
        this.toVector = () => {
            return new Vector_1.Vector(this.r * Math.cos(this.theta), this.r * Math.sin(this.theta));
        };
        this.normalize = () => {
            const x = Math.cos(this.theta);
            const y = Math.sin(this.theta);
            this.r = Math.atan2(y, x);
        };
        this.rand = () => {
            return new Polar(Math.random(), Math.random());
        };
        this.randSigned = () => {
            return new Polar(Math.random() - 0.5, Math.random() - 0.5);
        };
        this.clone = () => {
            return new Polar(this.r, this.theta);
        };
        this.negative = () => {
            this.r = -this.r;
            this.theta = -this.theta;
        };
        this.r = r;
        this.theta = theta;
    }
}
exports.Polar = Polar;
Polar.fromVector = (val) => {
    const r = val.mag;
    const theta = Math.atan2(val.y, val.x);
    return new Polar(r, theta);
};
Polar.generateRand = (size, max) => {
    const output = [];
    for (let i = 0; i < max; i++) {
        output.push(new Polar(Math.random() * max, Math.random()));
    }
    return output;
};
Polar.generateRandSigned = (size, max) => {
    const output = [];
    for (let i = 0; i < max; i++) {
        output.push(new Polar((Math.random() - 0.5) * max, Math.random() - 0.5));
    }
    return output;
};
