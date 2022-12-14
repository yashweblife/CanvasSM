"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewPoint = void 0;
const Vector_1 = require("../Vector");
class ViewPoint {
    constructor() {
        this.position = new Vector_1.Vector();
        this.scale = 200;
    }
}
exports.ViewPoint = ViewPoint;
