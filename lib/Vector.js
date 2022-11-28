"use strict";
/**
 * # Vector
 * ### This is the main library for Vectors.
 * Its primary functions are
 * Name | Info
 * -------|--------
 * add | Adds a vector
 * sub | Subtracts a vector
 * scalar | Scalar multiplication
 * normalize | Converts to a unit vector
 * dot | Vector dot product
 * cross | Vector cross product
 * rand | Generates a random vector
 * rotate | Rotates a vector
 * clone | Clones the vector
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
class Vector {
    /**
     *
     * @param x : X value; default is 0
     * @param y : y value; default is 0
     */
    constructor(x = 0, y = 0, z = 0) {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.mag = 0;
        this.ux = 0;
        this.uy = 0;
        this.uz = 0;
        this.angle = 0;
        /**
         * Recaliberates the vector data
         */
        this.recalib = () => {
            this.mag = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
            if (this.mag === 0) {
                this.ux = 0;
                this.uy = 0;
                this.uz = 0;
            }
            else {
                this.ux = this.x / this.mag;
                this.uy = this.y / this.mag;
                this.uz = this.z / this.mag;
            }
            this.angle = Math.atan2(this.y, this.x);
        };
        /**
         * Adds a Vector to the selected vector
         * @param a Vector
         */
        this.add = (a) => {
            this.x += a.x;
            this.y += a.y;
            this.z += a.z;
            this.recalib();
        };
        /**
         * Subtracts a vector
         * @param a Vector
         */
        this.sub = (a) => {
            this.x -= a.x;
            this.y -= a.y;
            this.z -= a.z;
            this.recalib();
        };
        /**
         * Multiplies vector with a number
         * @param a Number
         */
        this.scalar = (a) => {
            this.x *= a;
            this.y *= a;
            this.z *= a;
            this.recalib();
        };
        /**
         * Sets vector to unit vector
         */
        this.normalize = () => {
            if (this.mag === 0) {
                this.x = 0;
                this.y = 0;
                this.z = 0;
            }
            else {
                this.x = this.x / this.mag;
                this.y = this.y / this.mag;
                this.z = this.z / this.mag;
            }
            this.recalib();
        };
        /**
         * Vector dot product
         * @param a Vector
         * @returns A scalar multiplier
         */
        this.dot = (a) => {
            return this.x * a.x + this.y * a.y;
        };
        /**
         * Vector cross product
         * @param a Vector
         */
        this.cross = (a) => {
            const x = this.y * a.z - this.z * a.y;
            const y = this.z * a.x - this.x * a.z;
            const z = this.x * a.y - this.y * a.x;
            return new Vector(x, y, z);
        };
        /**
         * Returns distance between 2 vectors
         */
        this.dist = (a) => {
            return Math.sqrt(Math.pow((this.x - a.x), 2) + Math.pow((this.y - a.y), 2) + Math.pow((this.z - a.z), 2));
        };
        /**
         * Sets the magnitude of the vector without changing the direction
         */
        this.setMag = (a) => {
            this.normalize();
            this.scalar(a);
        };
        /**
         * Rotates Vector, preserves magnitude
         * @param angle Number
         */
        this.rotate = (angle) => {
            const sin = Math.sin(angle);
            const cos = Math.cos(angle);
            this.x = this.x * cos - this.y * sin;
            this.y = this.x * sin + this.y * cos;
        };
        this.getNegative = () => {
            return new Vector(-this.x, -this.y, -this.z);
        };
        /**
         * Clones the Vector
         * @returns cloned Vector
         */
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
/**
 * Creates a random Vector
 * @param min Number
 * @param max Number
 * @returns A random Vector
 */
Vector.randSigned = (val) => {
    const x = (Math.random() - 0.5) * val * 2;
    const y = (Math.random() - 0.5) * val * 2;
    const z = (Math.random() - 0.5) * val * 2;
    return new Vector(x, y, z);
};
/**
 * Returns a randomized vector
 * @param min
 * @param max
 * @returns
 */
Vector.rand = (val) => {
    const x = Math.random() * val;
    const y = Math.random() * val;
    const z = Math.random() * val;
    return new Vector(x, y, z);
};
/**
 * Returns subtraction of 2 vectors
 */
Vector.VecFromSub = (b1, b2) => {
    const x = b2.x - b1.x;
    const y = b2.y - b1.y;
    const z = b2.z - b1.z;
    return new Vector(x, y, z);
};
/**
 * Returns addition of 2 vectors
 */
Vector.VecFromAdd = (b1, b2) => {
    const x = b2.x + b1.x;
    const y = b2.y + b1.y;
    const z = b2.z + b1.z;
    return new Vector(x, y, z);
};
/**
 * Returns a normalized form of a given vector
 */
Vector.getNormalized = (v) => {
    return new Vector(v.x / v.mag, v.y / v.mag, v.z / v.mag);
};
/**
 * Finds the average of all provided vectors
 * @param vals : Vector[]
 * @returns Vector
 */
Vector.getAverage = (vals) => {
    const avg = new Vector();
    vals.forEach((val) => {
        avg.add(val);
    });
    avg.scalar(1 / vals.length);
    return avg;
};
