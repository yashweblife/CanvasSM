"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicsObject = void 0;
const Vector_1 = require("./Vector");
class PhysicsObject {
    constructor() {
        this.pos = new Vector_1.Vector();
        this.vel = new Vector_1.Vector();
        this.acc = new Vector_1.Vector();
        this.mass = 1;
        this.size = 1;
        this.charge = 0;
        this.rigidBody = false;
        this.addForce = (v) => {
            this.acc.add(v);
        };
        this.dist = (b) => {
            return this.pos.dist(b.pos);
        };
        this.attract = (b, f = 0.9) => {
            const nVec = Vector_1.Vector.VecFromSub(this.pos, b.pos);
            nVec.normalize();
            nVec.scalar(f);
            this.addForce(nVec);
        };
        this.repel = (b, f = 0.9) => {
            const nVec = Vector_1.Vector.VecFromSub(b.pos, this.pos);
            nVec.normalize();
            nVec.scalar(f);
            this.addForce(nVec);
        };
        /**
         * ## Attraction Behaviour
         * Attracts the ball to another ball
         * @param b Ball to get attracted to
         */
        this.attractGravo = (b) => {
            const nVec = Vector_1.Vector.VecFromSub(this.pos, b.pos);
            let dist = this.pos.dist(b.pos);
            const f = 0.0001;
            if (this.size instanceof Vector_1.Vector) {
                if (dist < this.size.mag) {
                    dist = this.size.mag;
                }
            }
            else {
                if (dist < this.size) {
                    dist = this.size;
                }
            }
            nVec.normalize();
            nVec.scalar((f * this.mass * b.mass) / dist);
            this.addForce(nVec);
        };
        /**
         * ## Repulsion Behaviour
         * Repels a physics object
         */
        this.repelGravo = (b) => {
            const nVec = Vector_1.Vector.VecFromAdd(this.pos, b.pos);
            let dist = this.pos.dist(b.pos);
            const f = 0.1;
            if (this.size instanceof Vector_1.Vector) {
                if (dist === 0) {
                    dist = this.size.mag;
                }
            }
            else {
                if (dist === 0) {
                    dist = this.size;
                }
            }
            nVec.normalize();
            nVec.scalar((f * this.mass) / Math.pow(dist, 2));
            this.addForce(nVec);
        };
        this.chargeInteraction = (b) => {
            if ((b.charge > 0 && this.charge > 0) || (b.charge < 0 && this.charge < 0)) {
                this.repel(b, this.charge * b.charge);
            }
            else {
                this.attract(b, this.charge * b.charge);
            }
        };
    }
}
exports.PhysicsObject = PhysicsObject;
