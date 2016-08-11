export function updateCircles (selector) {
  selector.select('circle')
    .attr('r', (d) => d._children || d.children ? 40 : 5)
    .style('fill', (d) => d._children ? 'lightsteelblue' : '#fff')
    .style('stroke', 'steelblue')
    .style('stroke-width', 1.5 + 'px');
}
