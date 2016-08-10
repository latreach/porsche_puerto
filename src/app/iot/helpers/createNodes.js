export function createNodes (selector) {
  selector.append('circle')
    .attr('r', 1e-6)
    .attr('fill', (d) => d._children ? 'lightsteelblue' : '#fff')
    .attr('stroke', 'transparent');
}

