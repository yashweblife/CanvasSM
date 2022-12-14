"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Canvas3D = void 0;
const Canvas_1 = require("../Canvas");
const Vector_1 = require("../Vector");
const ViewPoint_1 = require("./ViewPoint");
class Canvas3D {
    constructor(parent = document.body) {
        this.canvas = new Canvas_1.Canvas();
        this.size = new Vector_1.Vector(100, 100);
        this.camera = new ViewPoint_1.ViewPoint();
        this.bodies = [];
        this.forces = [];
        this.environmentForces = new Vector_1.Vector();
        this.addBody = (bod) => {
            this.bodies.push(bod);
        };
        this.calculateEnvironmentForce = () => {
            this.environmentForces.scalar(0);
            this.forces.forEach((force) => {
                this.environmentForces.add(force);
            });
        };
        this.addEnvironmentForce = (force) => {
            this.forces.push(force);
            this.calculateEnvironmentForce();
        };
        this.draw = () => {
            this.bodies.forEach((body) => {
                body.draw(this.canvas);
            });
        };
        this.update = () => {
            this.bodies.forEach((body) => {
                body.update();
            });
        };
        this.animate = () => {
            this.canvas.clear();
            this.update();
            this.draw();
        };
        parent.append(this.canvas.dom);
    }
}
exports.Canvas3D = Canvas3D;
