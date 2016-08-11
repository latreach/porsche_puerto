export const color = d3.scaleLinear()
  .domain([-1, 6])
  .range(['hsla(146, 100%, 25%, 1)', 'hsla(345, 32%, 95%, 1)'])
  .interpolate(d3.interpolateHcl);
