import { Vector } from '../Vector';
import { Body } from './Body';
export declare class Canvas3D {
    private canvas;
    private size;
    private camera;
    private bodies;
    private forces;
    private environmentForces;
    constructor(parent?: HTMLElement);
    addBody: (bod: Body) => void;
    private calculateEnvironmentForce;
    addEnvironmentForce: (force: Vector) => void;
    draw: () => void;
    update: () => void;
    private animate;
}
