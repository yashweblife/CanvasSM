import { PhysicsObject } from './PhysicsObject';
import { Vector } from './Vector';
export declare class Mouse extends PhysicsObject {
    click: boolean;
    offset: Vector;
    mass: number;
    wheel: number;
    constructor();
    handleMove: (e: MouseEvent) => void;
    handleClick: (e: MouseEvent) => void;
    handleDown: (e: MouseEvent) => void;
    handleUp: (e: MouseEvent) => void;
    move: (e: MouseEvent) => void;
    setOffset: (val: DOMRect) => void;
    handleWheel: (e: WheelEvent) => void;
}
