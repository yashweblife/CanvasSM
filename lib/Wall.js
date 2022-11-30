"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wall = void 0;
const Color_1 = require("./Color");
const PhysicsObject_1 = require("./PhysicsObject");
const Vector_1 = require("./Vector");
class Wall extends PhysicsObject_1.PhysicsObject {
    constructor(pos, end) {
        super();
        this.color = new Color_1.Color(200, 0, 0);
        this.setColor = (val) => {
            this.color = val;
        };
        this.checkIntersection = (val) => {
            if (val.size instanceof Vector_1.Vector) {
                const a = this.pos;
                const a1 = this.size;
                const b = val.pos;
                const b1 = val.size;
                if (a.x + a1.x > b.x && a.x + a1.x > b.x + b1.x && a.y + a1.y < b.y + b1.y && a.y + a1.y > b.y) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                const a = this.pos;
                const a1 = this.size;
                const b = val.pos;
                const b1 = val.size;
                if (a.dist(b) <= b1) {
                    return true;
                }
                else {
                    return false;
                }
            }
        };
        this.draw = (c) => {
            c.rect({
                pos: this.pos,
                size: this.size,
                fill: true,
                fillColor: this.color.getColor(),
            });
        };
        this.pos = pos;
        this.size = end;
    }
}
exports.Wall = Wall;
