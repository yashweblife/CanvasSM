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
import { Polar } from './Polar';
import { Spherical } from './Spherical';
export declare class Vector {
    x: number;
    y: number;
    z: number;
    mag: number;
    ux: number;
    uy: number;
    uz: number;
    angle: number;
    /**
     *
     * @param x : X value; default is 0
     * @param y : y value; default is 0
     */
    constructor(x?: number, y?: number, z?: number);
    /**
     * Recaliberates the vector data
     */
    private recalib;
    /**
     * Adds a Vector to the selected vector
     * @param a Vector
     */
    add: (a: Vector) => void;
    /**
     * Subtracts a vector
     * @param a Vector
     */
    sub: (a: Vector) => void;
    /**
     * Multiplies vector with a number
     * @param a Number
     */
    scalar: (a: number) => void;
    /**
     * Sets vector to unit vector
     */
    normalize: () => void;
    /**
     * Vector dot product
     * @param a Vector
     * @returns A scalar multiplier
     */
    dot: (a: Vector) => number;
    /**
     * Vector cross product
     * @param a Vector
     */
    cross: (a: Vector) => Vector;
    /**
     * Returns distance between 2 vectors
     */
    dist: (a: Vector) => number;
    distFromPolar: (a: Polar) => number;
    distFromSpherical: (a: Spherical) => number;
    /**
     * Sets the magnitude of the vector without changing the direction
     */
    setMag: (a: number) => void;
    /**
     * Creates a random Vector
     * @param min Number
     * @param max Number
     * @returns A random Vector
     */
    static randSigned: (val: number) => Vector;
    /**
     * Returns a randomized vector
     * @param min
     * @param max
     * @returns
     */
    static rand: (val: number) => Vector;
    /**
     * Returns subtraction of 2 vectors
     */
    static VecFromSub: (b1: Vector, b2: Vector) => Vector;
    /**
     * Returns addition of 2 vectors
     */
    static VecFromAdd: (b1: Vector, b2: Vector) => Vector;
    /**
     * Returns a normalized form of a given vector
     */
    static getNormalized: (v: Vector) => Vector;
    /**
     * Rotates Vector, preserves magnitude
     * @param angle Number
     */
    rotate: (angle: number) => void;
    getNegative: () => Vector;
    /**
     * Finds the average of all provided vectors
     * @param vals : Vector[]
     * @returns Vector
     */
    static getAverage: (vals: Vector[]) => Vector;
    /**
     * Clones the Vector
     * @returns cloned Vector
     */
    clone: () => Vector;
}
