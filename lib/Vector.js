"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
class Vector {
    constructor(x = 0, y = 0, z = 0) {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.mag = 0;
        this.recalib = () => {
            this.mag = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
        };
        this.add = (val) => {
            this.x += val.x;
            this.y += val.y;
            this.z += val.z;
            this.recalib();
        };
        this.scalar = (val) => {
            this.x *= val;
            this.y *= val;
            this.z *= val;
            this.recalib();
        };
        this.normalize = () => {
            this.scalar(this.mag);
            this.recalib();
        };
        this.setMag = (val) => {
            this.normalize();
            this.scalar(val);
        };
        this.clone = () => {
            return new Vector(this.x, this.y, this.z);
        };
        this.x = x;
        this.y = y;
        this.z = z;
        this.recalib();
    }
}
exports.Vector = Vector;
Vector.fromPolar = (r, theta) => {
    const x = r * Math.cos(theta);
    const y = r * Math.sin(theta);
    return new Vector(x, y);
};
Vector.toPolar = (val) => {
    return { r: val.mag, theta: Math.atan2(val.y, val.x) };
};
Vector.rand = (val) => {
    return new Vector(Math.random() * val, Math.random() * val, Math.random() * val);
};
Vector.randSigned = (val) => {
    return new Vector((Math.random() - 0.5) * 2 * val, (Math.random() - 0.5) * 2 * val, (Math.random() - 0.5) * 2 * val);
};
Vector.randArray = (size, val) => {
    const output = [];
    for (let i = 0; i < size; i++) {
        output.push(Vector.rand(val));
    }
    return output;
};
Vector.randSignedArray = (size, val) => {
    const output = [];
    for (let i = 0; i < size; i++) {
        output.push(Vector.randSigned(val));
    }
    return output;
};
