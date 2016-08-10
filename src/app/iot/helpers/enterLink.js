
function enterLink(node, source) {
  link.enter()
    .insert('path', 'g')
      .attr('class', 'link')
      .attr('d', () => connector({
        x: source.x,
        y: source.y,
        parent: {
          x: source.x,
          y: source.y
        }
      }))
      .remove()
    .transition().duration(duration)
      .attr('d', connector);
  const linkEnter = link.enter().insert('path', 'g')
      .attr('class', 'link')
      .attr('d', () => connector({
        x: source.x,
        y: source.y,
        parent: {
          x: source.x,
          y: source.y
        }
      }));
  link
    .merge(linkEnter)
      .transition().duration(duration)
        .attr('d', connector)
    .exit()
      .transition().duration(duration)
        .attr('d', () => connector({
          x: source.x,
          y: source.y,
          parent: {
            x: source.x,
            y: source.y
          }
        }));
}

