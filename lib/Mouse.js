"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mouse = void 0;
const PhysicsObject_1 = require("./PhysicsObject");
const Vector_1 = require("./Vector");
class Mouse extends PhysicsObject_1.PhysicsObject {
    constructor() {
        super();
        this.click = false;
        this.mass = 1;
        this.wheel = 0;
        this.handleMove = (e) => {
            this.pos.x = e.x;
            this.pos.y = e.y;
        };
        this.handleClick = (e) => {
            this.click = true;
        };
        this.handleDown = (e) => {
            this.click = true;
        };
        this.handleUp = (e) => {
            this.click = false;
        };
        this.move = (e) => {
            this.pos.x = e.clientX - this.offset.x;
            this.pos.y = e.clientY - this.offset.y;
        };
        this.setOffset = (val) => {
            this.offset.x = val.left;
            this.offset.y = val.top;
        };
        this.handleWheel = (e) => {
            if (e.deltaY > 0) {
                this.wheel += 1;
            }
            else if (e.deltaY < 0) {
                this.wheel -= 1;
            }
        };
        this.pos = new Vector_1.Vector();
        this.offset = new Vector_1.Vector();
    }
}
exports.Mouse = Mouse;
