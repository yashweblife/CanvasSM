import { Vector } from "./Vector";
export interface VectorInterface {
    x: number;
    y: number;
    z: number;
}
export interface PolarInterface {
    r: number;
    theta: number;
}
export interface ColorInterface {
    r: number;
    g: number;
    b: number;
    a: number;
}
export interface CircleInterface {
    pos: Vector;
    size: number;
    fill?: boolean;
    stroke?: boolean;
    fillColor?: string;
    strokeColor?: string;
}
export interface LineInterface {
    start: Vector;
    end: Vector;
    color: string;
    size: number;
}
