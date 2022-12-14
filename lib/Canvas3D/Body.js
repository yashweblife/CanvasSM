"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Body = void 0;
const Vector_1 = require("../Vector");
const Face_1 = require("./Face");
class Body {
    constructor(faces, position) {
        this.faces = [];
        this.position = new Vector_1.Vector();
        this.angularPosition = new Vector_1.Vector();
        this.angularVelocity = new Vector_1.Vector();
        this.angularAcceleration = new Vector_1.Vector();
        this.draw = (c) => {
            this.faces.forEach((face) => {
                face.draw(c);
            });
        };
        this.rotate = (vector) => {
            this.faces.forEach((face) => {
                face.rotate(vector);
            });
        };
        this.update = () => {
            this.angularVelocity.add(this.angularAcceleration);
            this.angularPosition.add(this.angularVelocity);
            this.rotate(this.angularPosition);
            this.angularAcceleration.scalar(0);
        };
        this.faces = faces;
        this.position = position;
    }
}
exports.Body = Body;
Body.makeBox = (center = new Vector_1.Vector(), size = new Vector_1.Vector(1, 1, 1)) => {
    const v = [
        new Vector_1.Vector(1, 1, 1),
        new Vector_1.Vector(1, -1, 1),
        new Vector_1.Vector(-1, -1, 1),
        new Vector_1.Vector(-1, 1, 1),
        new Vector_1.Vector(1, -1, -1),
        new Vector_1.Vector(1, 1, -1),
        new Vector_1.Vector(-1, -1, -1),
        new Vector_1.Vector(-1, 1, -1),
    ];
    const faces = [
        [
            v[0],
            v[1],
            v[2],
            v[3],
            v[0], // front
        ],
        [
            v[0],
            v[1],
            v[4],
            v[5],
            v[0], // right
        ],
        [
            v[5],
            v[4],
            v[6],
            v[7],
            v[5], // back
        ],
        [
            v[7],
            v[6],
            v[2],
            v[3],
            v[7], // left
        ],
        [
            v[0],
            v[5],
            v[7],
            v[3],
            v[0], // top
        ],
        [
            v[1],
            v[4],
            v[6],
            v[2],
            v[1], // bottom
        ],
    ];
    const finalFaces = [];
    faces.forEach((f) => {
        f.forEach((vec) => {
            vec.x *= size.x;
            vec.y *= size.y;
            vec.z *= size.z;
        });
        finalFaces.push(new Face_1.Face(f));
    });
    return new Body(finalFaces, center);
};
