export function endPt (b) {
  const x = b.x + b.l * Math.sin(b.a);
  const y = b.y - b.l * Math.cos(b.a);

  return {x: x, y: y};
}
