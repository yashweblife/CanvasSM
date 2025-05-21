export default class Vector {
    components: number[]
    constructor(components: number[]) {
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
        return new Vector(this.components.map((component, index) => component + vector.components[index]))
    }
}

