"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ball = void 0;
const Color_1 = require("./Color");
const PhysicsObject_1 = require("./PhysicsObject");
const Vector_1 = require("./Vector");
class Ball extends PhysicsObject_1.PhysicsObject {
    constructor(pos = new Vector_1.Vector()) {
        super();
        this.color = new Color_1.Color();
        this.size = 10;
        this.setColor = (val = new Color_1.Color(255, 0, 0)) => {
            this.color = val;
        };
        this.draw = (c) => {
            c.circle({
                pos: this.pos,
                size: this.size,
                fill: true,
                fillColor: this.color.getColor(),
            });
        };
        this.checkCollision = (val) => {
            if (this.dist(val) <= this.size + val.size) {
                return true;
            }
            else {
                return false;
            }
        };
        this.update = () => {
            this.vel.add(this.acc);
            this.pos.add(this.vel);
        };
        this.pos = pos;
    }
}
exports.Ball = Ball;
Ball.generate = (quantity, size) => {
    const output = [];
    for (var i = 0; i < quantity; i++) {
        output.push(new Ball(new Vector_1.Vector(Math.random() * size.x, Math.random() * size.y)));
    }
    return (output);
};
