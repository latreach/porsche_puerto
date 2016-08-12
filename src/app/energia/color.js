export const color = d3.scaleLinear()
  .domain([-1, 5])
  .range(['hsl(152,80%,80%)', 'hsl(228,30%, 40%)'])
  .interpolate(d3.interpolateHcl);
