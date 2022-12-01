"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Polar = void 0;
const Vector_1 = require("./Vector");
class Polar {
    constructor(r = 0, theta = 0) {
        this.r = 0;
        this.theta = 0;
        this.add = (val) => {
            this.r += val.r;
            this.theta += val.theta;
        };
        this.sub = (val) => {
            this.r -= val.r;
            this.theta -= val.theta;
        };
        this.dist = (val) => {
            const d = Math.sqrt(Math.pow(this.r, 2) + Math.pow(val.r, 2) - 2 * this.r * val.r * Math.cos(this.theta - val.theta));
            return d;
        };
        this.distFromVector = (val) => {
            const ptov = this.toVector();
            return val.dist(ptov);
        };
        this.distFromSpherical = (val) => {
            const stov = val.toVector();
            const ptov = this.toVector();
            return stov.dist(ptov);
        };
        this.scalar = (val) => {
            this.r *= val;
        };
        this.toVector = () => {
            return new Vector_1.Vector(this.r * Math.cos(this.theta), this.r * Math.sin(this.theta));
        };
        this.normalize = () => {
            const x = this.r * Math.cos(this.theta);
            const y = this.r * Math.sin(this.theta);
            this.r = Math.atan2(y, x);
        };
        this.clone = () => {
            return new Polar(this.r, this.theta);
        };
        this.negative = () => {
            this.r = this.r;
            this.theta = Math.PI - this.theta;
        };
        this.r = r;
        this.theta = theta;
    }
}
exports.Polar = Polar;
Polar.getRad = (deg) => {
    return deg * (Math.PI / 180);
};
Polar.getDeg = (rad) => {
    return rad * (180 / Math.PI);
};
Polar.fromVector = (val) => {
    const r = val.mag;
    const theta = Math.atan2(val.y, val.x);
    return new Polar(r, theta);
};
Polar.rand = () => {
    return new Polar(Math.random(), Math.random());
};
Polar.randSigned = () => {
    return new Polar(Math.random() - 0.5, Math.random() - 0.5);
};
Polar.generateRand = (size, max) => {
    const output = [];
    for (let i = 0; i < size; i++) {
        output.push(new Polar(Math.random() * max, Math.random()));
    }
    return output;
};
Polar.generateRandSigned = (size, max) => {
    const output = [];
    for (let i = 0; i < size; i++) {
        output.push(new Polar((Math.random() - 0.5) * max, Math.random() - 0.5));
    }
    return output;
};
