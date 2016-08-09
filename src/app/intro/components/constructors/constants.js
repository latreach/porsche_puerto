export const colors = [
  '#C4C4C4', '#69B40F', '#EC1D25', '#C8125C', '#008FC8', '#10218B',
  '#134B24', '#737373'
];

export const margin = {top: 20, right: 25, bottom: 20, left: 25};
export const height = window.innerHeight - margin.top - margin.bottom - 56;
export const width  = window.innerWidth - margin.left - margin.right;
export const innerRadius = Math.min(width, height) * 0.39;
export const outerRadius = innerRadius * 1.04;
export const mainSquareSize = 0.25 * width;
