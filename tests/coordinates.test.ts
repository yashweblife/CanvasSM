import { Ball, Polar, Spherical, Vector, Wall } from '../src';

describe('Vector Coordinates', () => {
  it('Should add 2 points', () => {
    const a = new Vector(1, 0, 0);
    const b = new Vector(1, 0, 0);
    a.add(b);
    expect(a.x).toBe(2);
  });
  it('Should subtract 2 points', () => {
    const a = new Vector(1, 0, 0);
    const b = new Vector(1, 0, 0);
    a.sub(b);
    expect(a.x).toBe(0);
  });
  it('Should find distance between 2 points', () => {
    const a = new Vector(0, 0, 0);
    const b = new Vector(1, 0, 0);
    expect(a.dist(b)).toBe(1);
  });
  it('Should multiply scalar to vector', () => {
    const a = 10;
    const b = new Vector(1, 0, 0);
    b.scalar(a);
    expect(b.x).toBe(10);
  });
  it('Should normalize point', () => {
    const a = new Vector(10, 0, 0);
    a.normalize();
    expect(a.x).toBeLessThanOrEqual(1);
  });
  it('Should dot product', () => {
    const a = new Vector(1, 0, 0);
    const b = new Vector(0, 1, 0);
    const c = a.dot(b);
    expect(c).toBe(0);
  });
  it('Should cross product', () => {
    const a = new Vector(1, 0, 0);
    const b = new Vector(0, 1, 0);
    const c = a.cross(b);
    expect(c.z).toBe(1);
  });
  it('Should set magnitude', () => {
    const a = new Vector(1, 0, 0);
    a.setMag(10);
    expect(a.x).toBe(10);
  });
  it('Should rotate point', () => {
    const a = new Vector(1, 0, 0);
    a.rotate(new Vector(Math.PI / 2,0,0));
  });
  it('Should return a negative of the vector', () => {
    const a = new Vector(1, 0, 0);
    const b = a.getNegative();
    expect(b.x).toBe(-1);
  });
  it('Should return the average of a vector array', () => {
    const a: Vector[] = [];
    for (var i = 0; i < 5; i++) {
      a.push(new Vector(i, 0, 0));
    }
    const b = Vector.getAverage(a);
    expect(b.x).toBe(2);
  });
  it('Should return a clone', () => {
    const a = new Vector(1, 1, 1);
    const b = a.clone();
    expect(b.mag).toBe(a.mag);
  });
  it('Should make random point', () => {
    const a = Vector.rand(1);
    expect(a.x).toBeLessThanOrEqual(1);
  });
  it('Should make random signed point', () => {
    const a = Vector.randSigned(1);
    expect(a.x).toBeGreaterThanOrEqual(-1);
    expect(a.x).toBeLessThanOrEqual(1);
  });
  it('Should make vector by adding 2 points', () => {
    const a = new Vector(1, 0, 0);
    const b = new Vector(0, 1, 0);
    const c = Vector.VecFromAdd(a, b);
    expect(c.x).toBe(1);
  });
  it('Should make vector by subtracting 2 points', () => {
    const a = new Vector(1, 0, 0);
    const b = new Vector(0, 1, 0);
    const c = Vector.VecFromSub(a, b);
    expect(c.x).toBe(-1);
  });
  it('Should normalize given vector', () => {
    const a = new Vector(1, 0, 0);
    const b = Vector.getNormalized(a);
    expect(b.x).toBeLessThanOrEqual(1);
  });
  it('Should find distance between vector and polar', () => {
    const a = new Vector();
    const b = new Polar(2, 0);
    expect(a.distFromPolar(b)).toBe(2);
  });
  it('Should find distance between vector and Spherical', () => {
    const a = new Vector();
    const b = new Spherical(2, 0, 0);
    expect(a.distFromSpherical(b)).toBe(2);
  });
});

describe('Polar Coordinates', () => {
  it('Should convert deg to rad', () => {
    const a = 90;
    const b = Polar.getRad(a);
    expect(b).toBeCloseTo(1.5, 0.01);
  });
  it('Should convert rad to deg', () => {
    const a = new Polar(1, 0);
    const b = Polar.getDeg(Math.PI);
    expect(b).toBeCloseTo(180, 2);
  });
  it('Should add 2 points', () => {
    const a = new Polar(1, 0);
    const b = new Polar(1, 0);
    a.add(b);
    expect(a.r).toBe(2);
  });
  it('Should subtract 2 points', () => {
    const a = new Polar(1, 0);
    const b = new Polar(1, 0);
    a.sub(b);
    expect(a.r).toBe(0);
  });
  it('Should multiply a scalar', () => {
    const a = new Polar(1, 0);
    a.scalar(10);
    expect(a.r).toBe(10);
  });
  it('Should convert to vector', () => {
    const a = new Polar(1, 0);
    const b = a.toVector();
    expect(b.x).toBe(1);
  });
  it('Should make polar from vector', () => {
    const a = new Vector(1, 0);
    const b = Polar.fromVector(a);
    expect(b.r).toBe(1);
  });
  it('Should find distance between polar and vector', () => {
    const a = new Polar();
    const b = new Vector(2, 0, 0);
    expect(a.distFromVector(b)).toBe(2);
  });
  it('Should find distance between polar and Spherical', () => {
    const a = new Polar();
    const b = new Spherical(2, 0, 0);
    expect(a.distFromSpherical(b)).toBe(2);
  });
  it('Should normalize', () => {
    const a = new Polar(1, 0);
    a.normalize();
    expect(a.r).toBeLessThanOrEqual(1);
  });
  it('Should create random point', () => {
    const a = Polar.rand();
    expect(a.r).toBeLessThanOrEqual(1);
  });
  it('Should create random signed point', () => {
    const a = Polar.randSigned();
    expect(a.r).toBeLessThanOrEqual(1);
    expect(a.r).toBeGreaterThanOrEqual(-1);
  });
  it('Should clone point', () => {
    const a = new Polar(1, 0);
    const b = a.clone();
    expect(b.r).toBe(1);
  });
  it('Should negate point', () => {
    const a = new Polar(1, 0);
    a.negative();
    expect(a.r).toBe(1);
  });
  it('Should make random array of points', () => {
    const a = Polar.generateRand(2, 1);
    expect(a.length).toBe(2);
  });
  it('Should make random singed array of points', () => {
    const a = Polar.generateRandSigned(2, 1);
    expect(a.length).toBe(2);
  });
});

describe('Spherical Coordinates', () => {
  it('Should add 2 points', () => {
    const a = new Spherical(1, 0, 0);
    const b = new Spherical(2, 0, 0);
    a.add(b);
    expect(a.r).toBe(3);
  });
  it('Should subtract 2 points', () => {
    const a = new Spherical(1, 0, 0);
    const b = new Spherical(2, 0, 0);
    a.sub(b);
    expect(a.r).toBe(-1);
  });
  it('Checks distance between 2 points', () => {
    const a = new Spherical(1, 0, 0);
    const b = new Spherical(2, 0, 0);
    expect(a.dist(b)).toBe(1);
  });
  it('Should find distance between spherical and vector', () => {
    const a = new Spherical();
    const b = new Vector(2, 0, 0);
    expect(a.distFromVector(b));
  });

  it('Should find distance between spherical and Polar', () => {
    const a = new Spherical();
    const b = new Polar(2, 0);
    expect(a.distFromPolar(b));
  });
  it('Should Create point from vector', () => {
    const a = new Spherical(0, 0, 0);
    const b = new Vector(1, 1, 1);
    a.fromVector(b);
    expect(a.r).toBe(Math.sqrt(3));
  });
  it('Should create spherical from vector', () => {
    const a = new Vector(1, 0, 0);
    const b = Spherical.getFromVector(a);
    expect(b.r).toBe(1);
  });
  it('Should Create vector from point', () => {
    const a = new Spherical(1, 0, 0);
    const b = a.toVector();
    expect(b.mag).toBe(1);
  });
});

describe('Ball', () => {
  it('Updates the position', () => {
    const ball = new Ball(new Vector());
    ball.addForce(new Vector(1, 1));
    ball.update();
    expect(ball.pos.x).toBe(1);
  });
  it('Checks intersection between 2 balls', () => {
    const b1 = new Ball();
    b1.size = 10;
    const b2 = new Ball(new Vector(1, 1));
    b2.size = 10;
    expect(b1.checkCollision(b2)).toBe(true);
  });
});

describe('Wall', () => {
  it('Checks intersection between wall and ball', () => {
    const w1 = new Wall(new Vector(), new Vector(100, 100));
    const w2 = new Ball(new Vector(200, 0));
    expect(w1.checkIntersection(w2)).toBe(false);
  });
});
