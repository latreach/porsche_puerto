/**
 * Ticks initialization
 */
import {svg} from './svg';
import {outerRadius, NameProvider, groupTicks} from './constants';

export const ticks = svg
  .selectAll('g.group')
  .attr('class', (d) => 'ticks' + NameProvider[d.index])
  .selectAll('g.ticks')
  .attr('class', 'ticks')
  .data(groupTicks)
  .enter().append('svg:g')
  .attr('transform', (d) => {
    return 'rotate(' + (d.angle * 180 / Math.PI - 90) + ')' +
        'translate(' + (outerRadius + 40) + ',0)';
  });
