export function createCircles (selector) {
  selector.append('circle')
    .attr('r', 1e-6)
    .style('fill', (d) => d._children ? 'lightsteelblue' : '#fff')
    .style('stroke', 'lightsteelblue')
    .style('stroke-width', 0);
}
