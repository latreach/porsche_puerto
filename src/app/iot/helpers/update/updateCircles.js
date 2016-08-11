export function updateCircles (selector) {
  selector.select('circle')
    .attr('r', 4.5)
    .style('fill', function (d) {
      return d._children ? 'lightsteelblue' : '#fff';
    })
    .style('stroke', 'steelblue')
    .style('stroke-width', 1.5 + 'px');
}
