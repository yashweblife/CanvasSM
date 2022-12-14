"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderOptions = void 0;
const Vector_1 = require("../Vector");
class RenderOptions {
}
exports.RenderOptions = RenderOptions;
RenderOptions.project = (vector, cameraPosition = new Vector_1.Vector(100, 100), distance = 200) => {
    const r = distance / vector.y;
    return new Vector_1.Vector(r * vector.x, r * vector.z);
};
