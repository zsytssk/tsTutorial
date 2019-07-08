type A = { x: number; y: number };
type B = { x: number; Z: number };

type C = A & B;
type D = A | B;

let c: C;

// let d: D;
