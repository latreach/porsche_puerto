function createText (node) {
  node.append('text')
    .attr('x', (d) => d.children || d._children ? -10 : 10)
    .attr('dy', '0.35em')
    .attr('text-anchor', (d) => d.children || d._children ? 'end' : 'start')
    .text((d) => d.data.name)
    .style('fill-opacity', 1);
}

