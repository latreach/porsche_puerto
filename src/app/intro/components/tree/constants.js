import {mainSquareSize} from '../constructors';
export const branches = [];
export const seed = {
  i: 0,
  x: 0,
  y: mainSquareSize / 2,
  a: 0, // angle
  l: 100, // length
  d: 0 // depth
};
export const da = 0.5; // Angle delta
export const dl = 0.7; // Length delta (factor)
export const ar = 0.7; // Randomness
export const maxDepth = 10;
