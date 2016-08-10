function exitNode (selector, s) {
  selector.exit()
    .transition().duration(duration)
      .attr('transform', 'translate(' + s.y + ',' + s.x + ')')
      .remove()
    .select('circle')
      .attr('r', 1e-6)
    .select('text')
      .attr('fill-opacity', 1e-6);
}

