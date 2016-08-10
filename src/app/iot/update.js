import {node, duration, link, nodes} from './constructors';
import {click, connector} from './helpers';

export function update (source) {

  const nodeEnter = node.enter()
    .append('g')
      .attr('class', 'node')
      .attr('transform', () => 'translate(' + source.y0 + ',' + source.x0 + ')')
      .on('click', click);

  nodeEnter.append('circle')
      .attr('r', 12)
      .style('fill', (d) => d._children ? 'lightsteelblue' : '#fff')

  nodeEnter.append('text')
      .attr('x', (d) => d.children || d._children ? -10 : 10)
      .attr('dy', '0.35em')
      .attr('text-anchor', (d) => d.children || d._children ? 'end' : 'start')
      .text((d) => d.name)
      .style('fill-opacity', 1);

  node.exit()
    .transition().duration(duration)
      .attr('transform', 'translate(' + source.y + ',' + source.x + ')')
      .remove()
    .select('circle')
      .attr('r', 1e-6)
    .select('text')
      .attr('fill-opacity', 1e-6);

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

  nodes.forEach(function (d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });
}
