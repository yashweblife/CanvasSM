import {Spherical} from "./src/Spherical"
    
test('Gets distance between 2 sphers',()=>{
    const s1 = new Spherical(1)
    const s2 = new Spherical(10)
    expect(s1.dist(s2)).toBe(9)
})