export default class Vector {
    constructor(public components: number[]=[0, 0, 0]) {
        this.components = components
    }
    get x() {
        return this.components[0]
    }
    get y() {
        return this.components[1]
    }
    get z() {
        return this.components[2]
    }
    add(vector: Vector) {
        for(let i = 0; i < this.components.length; i++) {
            this.components[i] += vector.components[i]
        }
        return this
    }
    subtract(vector: Vector) {
        for(let i = 0; i < this.components.length; i++) {
            this.components[i] -= vector.components[i]
        }
        return this
    }
    multiply(vector: Vector) {
        for(let i = 0; i < this.components.length; i++) {
            this.components[i] *= vector.components[i]
        }
        return this
    }
    divide(vector: Vector) {
        for(let i = 0; i < this.components.length; i++) {
            this.components[i] /= vector.components[i]
        }
        return this
    }
    normalize() {
        let length = 0
        for(let i = 0; i < this.components.length; i++) {
            length += this.components[i] * this.components[i]
        }
        length = Math.sqrt(length)
        for(let i = 0; i < this.components.length; i++) {
            this.components[i] /= length
        }
        return this
    }
    scale(scalar: number) {
        for(let i = 0; i < this.components.length; i++) {
            this.components[i] *= scalar
        }
        return this
    }
    get mag(){
        let length = 0
        for(let i = 0; i < this.components.length; i++) {
            length += this.components[i] * this.components[i]
        }
        return Math.sqrt(length)
    }
    distance(vector: Vector) {
        let distance = 0
        for(let i = 0; i < this.components.length; i++) {
            distance += (this.components[i] - vector.components[i]) * (this.components[i] - vector.components[i])
        }
        return Math.sqrt(distance)
    }
    dot(vector: Vector) {
        let dot = 0
        for(let i = 0; i < this.components.length; i++) {
            dot += this.components[i] * vector.components[i]
        }
        return dot
    }
    rotateX(angle: number) {
        let x = this.components[0]
        let y = this.components[1]
        let z = this.components[2]
        this.components[0] = x * Math.cos(angle) - z * Math.sin(angle)
        this.components[1] = y
        this.components[2] = x * Math.sin(angle) + z * Math.cos(angle)
        return this
    }
    rotateY(angle: number) {
        let x = this.components[0]
        let y = this.components[1]
        let z = this.components[2]
        this.components[0] = x * Math.cos(angle) + z * Math.sin(angle)
        this.components[1] = y
        this.components[2] = -x * Math.sin(angle) + z * Math.cos(angle)
        return this
    }
    rotateZ(angle: number) {
        let x = this.components[0]
        let y = this.components[1]
        let z = this.components[2]
        this.components[0] = x * Math.cos(angle) - y * Math.sin(angle)
        this.components[1] = x * Math.sin(angle) + y * Math.cos(angle)
        this.components[2] = z
        return this
    }
    rotate(angles: Vector) {
        this.rotateX(angles.x)
        this.rotateY(angles.y)
        this.rotateZ(angles.z)
        return this
    }
    static add(vector1: Vector, vector2: Vector) {
        let components = []
        for(let i = 0; i < vector1.components.length; i++) {
            components.push(vector1.components[i] + vector2.components[i])
        }
        return new Vector(components)
    }
    static subtract(vector1: Vector, vector2: Vector) {
        let components = []
        for(let i = 0; i < vector1.components.length; i++) {
            components.push(vector1.components[i] - vector2.components[i])
        }
        return new Vector(components)
    }
    static multiply(vector1: Vector, vector2: Vector) {
        let components = []
        for(let i = 0; i < vector1.components.length; i++) {
            components.push(vector1.components[i] * vector2.components[i])
        }
        return new Vector(components)
    }
    static divide(vector1: Vector, vector2: Vector) {
        let components = []
        for(let i = 0; i < vector1.components.length; i++) {
            components.push(vector1.components[i] / vector2.components[i])
        }
        return new Vector(components)
    }
    static dot(vector1: Vector, vector2: Vector) {
        let dot = 0
        for(let i = 0; i < vector1.components.length; i++) {
            dot += vector1.components[i] * vector2.components[i]
        }
        return dot
    }
}

