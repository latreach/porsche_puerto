export function createText (node) {
  node.append('text')
    .attr('x', (d) => d.children ? 0 : 10)
    .attr('dy', (d) => (d.children ? -1 : -0.5) + 'em')
    .attr('text-anchor', (d) => d.children ? 'middle' : 'start')
    .text((d) => d.data.top)
    .style('font-size', 1 + 'em')
    .style('fill-opacity', 1e-6);

  node.append('text')
    .attr('class', 'mainNodeTitle')
    .attr('x', (d) => d.children || d._children ? 0 : 10)
    .attr('dy', 0.25 + 'em')
    .attr('text-anchor', (d) => d.children || d._children ? 'middle' : 'start')
    .text((d) => d.data.title)
    .style('font-size', 1 + 'em')
    .style('fill-opacity', 1e-6);

  node.append('text')
    .attr('class', 'subtitle')
    .attr('x', (d) => d.children ? 0 : 10)
    .attr('dy', (d) => (d.children ? 1.5 : 0.5) + 'em')
    .attr('text-anchor', (d) => d.children ? 'middle' : 'start')
    .text((d) => d.data.bottom)
    .style('font-size', 1 + 'em')
    .style('fill-opacity', 1e-6);
}
