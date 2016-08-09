import {branch} from './branch';
import {endPt} from './endPt';
import {seed, branches, maxDepth} from './constants';

export function createTree (container) {
  branch(seed);

  container.append('g')
      .attr('class', 'mainRectTree')
    .selectAll('line')
    .data(branches).enter().append('line')
      .attr('id', (d) => 'branch-' + d.i)
      .attr('x1', (d) => d.x)
      .attr('y1', (d) => d.y)
      .attr('x2', (d) => endPt(d).x)
      .attr('y2', (d) => endPt(d).y)
      .style('stroke-width', (d) => maxDepth - d.d + 'px')
      .style('stroke', 'transparent')
      .each(function (d, i) {
        d3.select(this)
          .transition().duration(1000).delay(i)
          .style('stroke', 'white');
      });
}
