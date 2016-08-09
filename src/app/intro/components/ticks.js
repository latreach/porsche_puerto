/**
 * Ticks initialization
 */
import {svg, outerRadius, NameProvider} from './constructors';
import {groupTicks} from './helpers';

export const ticks = svg.selectAll('g.group').append('svg:g')
  .attr('class', (d) => 'ticks ' + NameProvider[d.index])
  .selectAll('g.ticks')
    .attr('class', 'ticks')
  .data(groupTicks)
    .enter().append('svg:g')
  .attr('transform', (d) => {
    return 'rotate(' + (d.angle * 180 / Math.PI - 90) + ')' +
        'translate(' + outerRadius + ',0)';
  });
