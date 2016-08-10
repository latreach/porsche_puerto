import {svg, nodes} from './constructors';
console.log(nodes);

export const node = svg.selectAll('g.node')
  .data(nodes, function (d) {
    d.y = d.y || (d.id = ++i);
  }).enter().append('g')
    .attr('class', 'node')
    .attr('transform', (d) => {
      return 'translate(' + d.source.y0 + ',' + d.source.x0 + ')';
    });
