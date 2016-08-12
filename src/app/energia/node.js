import {svg} from './svg';
import {nodes} from './nodes';
import {createCircles} from './createCircles.js';

export const node = svg.selectAll('.node')
  .data(nodes).enter().append('g')
  .attr('class', (d) => d.children ? 'node' : 'node leaf')
  .attr('transform', (d) => {
    return 'translate(' + d.x + ',' + d.y + ')';
  });

nodeEnter.append('circle')
  .attr('r', (d) => d.r)
  .style('fill', (d) => d.children ? 'rgb(31, 119, 180)' : '#ff7f0e')
  .style('fill-opacity', (d) => d.children ? 0.25 : 1);

nodeEnter.filter(function (d) {
  return !d.children;
}).append('text')
  .attr('dy', '.3em')
  .style('text-anchor', 'middle')
  .text(function (d) {
    return d.data.name.substring(0, d.r / 3);
  });
