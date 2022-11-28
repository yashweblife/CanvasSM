import { Vector } from './Vector';

export interface VectorInterface {
  x: number;
  y: number;
  z: number;
  [more: number]: number;
}

export interface PolarInterface {
  r: number;
  theta: number;
}

export interface ColorInterface {
  r: number;
  g: number;
  b: number;
  a?: number;
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
export interface PathInterface {
  points: Vector[];
  fill?: boolean | false;
  fillColor?: string;
  stroke?: boolean | true;
  strokeColor?: string;
}
export interface SphericalInterface {
  r: number;
  theta: number;
  psy: number;
}
export interface RectInterface {
  pos: Vector;
  size: Vector;
  fill?: boolean;
  stroke?: boolean;
  strokeColor?: string;
  fillColor?: string;
  angle?: number;
}
