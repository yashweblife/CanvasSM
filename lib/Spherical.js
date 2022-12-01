"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spherical = void 0;
const Vector_1 = require("./Vector");
class Spherical {
    constructor(r = 0, theta = 0, psy = 0) {
        this.r = 0;
        this.theta = 0;
        this.psy = 0;
        this.recalib = () => {
            return;
        };
        this.add = (val) => {
            this.r += val.r;
            this.theta += val.theta;
            this.psy += val.psy;
        };
        this.sub = (val) => {
            this.r -= val.r;
            this.theta -= val.theta;
            this.psy -= val.psy;
        };
        this.dist = (val) => {
            const p1 = Math.pow(this.r, 2) + Math.pow(val.r, 2);
            const p2 = 2 * this.r * val.r;
            const p3 = Math.sin(this.theta) * Math.sin(val.theta);
            const p4 = Math.cos(this.psy - val.psy);
            const p5 = Math.cos(this.theta) * Math.cos(val.theta);
            const d = Math.sqrt(p1 - p2 * (p3 * p4 + p5));
            return d;
        };
        this.distFromPolar = (val) => {
            const ptov = val.toVector();
            const stov = this.toVector();
            return ptov.dist(stov);
        };
        this.distFromVector = (val) => {
            const stov = this.toVector();
            return stov.dist(val);
        };
        this.scalar = (val) => {
            this.r *= val;
        };
        this.normalize = () => {
            this.r = 1;
        };
        this.rotateX = (val) => {
            this.theta += val;
        };
        this.rotateY = (val) => {
            this.psy += val;
        };
        this.fromVector = (vec) => {
            this.r = vec.mag;
            if (vec.z > 0)
                this.theta = Math.atan2(Math.sqrt(Math.pow(vec.x, 2) + Math.pow(vec.y, 2)), vec.z);
            if (vec.z < 0)
                this.theta = Math.PI + Math.atan2(Math.sqrt(Math.pow(vec.x, 2) + Math.pow(vec.y, 2)), vec.z);
            if (vec.z === 0)
                this.theta = Math.PI / 2;
            if (vec.x === 0 && vec.y === 0 && vec.z === 0)
                this.theta = 0;
            if (vec.x > 0)
                this.psy = Math.atan2(vec.y, vec.x);
            if (vec.x < 0 && vec.y >= 0)
                this.psy = Math.atan2(vec.y, vec.x) + Math.PI;
            if (vec.x < 0 && vec.y < 0)
                this.psy = Math.atan2(vec.y, vec.x) - Math.PI;
            if (vec.x === 0 && vec.y > 0)
                this.psy = Math.PI / 2;
            if (vec.x === 0 && vec.y < 0)
                this.psy = -Math.PI / 2;
            if (vec.x === 0 && vec.y === 0)
                this.psy = 0;
        };
        this.toVector = () => {
            const x = this.r * (Math.sin(this.theta) * Math.cos(this.psy));
            const y = this.r * (Math.sin(this.theta) * Math.sin(this.psy));
            const z = this.r * Math.cos(this.theta);
            return new Vector_1.Vector(x, y, z);
        };
        this.r = r;
        this.theta = theta;
        this.psy = psy;
        this.recalib();
    }
}
exports.Spherical = Spherical;
Spherical.getFromVector = (vec) => {
    const output = new Spherical();
    output.r = vec.mag;
    if (vec.z > 0)
        output.theta = Math.atan2(Math.sqrt(Math.pow(vec.x, 2) + Math.pow(vec.y, 2)), vec.z);
    if (vec.z < 0)
        output.theta = Math.PI + Math.atan2(Math.sqrt(Math.pow(vec.x, 2) + Math.pow(vec.y, 2)), vec.z);
    if (vec.z === 0)
        output.theta = Math.PI / 2;
    if (vec.x === 0 && vec.y === 0 && vec.z === 0)
        output.theta = 0;
    if (vec.x > 0)
        output.psy = Math.atan2(vec.y, vec.x);
    if (vec.x < 0 && vec.y >= 0)
        output.psy = Math.atan2(vec.y, vec.x) + Math.PI;
    if (vec.x < 0 && vec.y < 0)
        output.psy = Math.atan2(vec.y, vec.x) - Math.PI;
    if (vec.x === 0 && vec.y > 0)
        output.psy = Math.PI / 2;
    if (vec.x === 0 && vec.y < 0)
        output.psy = -Math.PI / 2;
    if (vec.x === 0 && vec.y === 0)
        output.psy = 0;
    return output;
};
Spherical.getToSpherical = (val) => {
    const x = val.r * (Math.sin(val.theta) * Math.cos(val.psy));
    const y = val.r * (Math.sin(val.theta) * Math.sin(val.psy));
    const z = val.r * Math.cos(val.theta);
    return new Vector_1.Vector(x, y, z);
};
