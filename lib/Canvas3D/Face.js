"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Face = void 0;
const RenderOptions_1 = require("./RenderOptions");
class Face {
    constructor(vertices) {
        this.vertices = [];
        this.rotate = (vector) => {
            this.vertices.forEach((val) => {
                val.rotate(vector);
            });
        };
        this.draw = (c) => {
            c.begin();
            c.moveToVec(RenderOptions_1.RenderOptions.project(this.vertices[0]));
            for (let i = 1; i < this.vertices.length; i++) {
                c.lineToVec(RenderOptions_1.RenderOptions.project(this.vertices[i]));
            }
            c.close();
            c.stroke();
        };
        this.vertices = vertices;
    }
}
exports.Face = Face;
