/**
 * Groups for chord diagram
 */
import {svg, chord, NameProvider, matrix} from './constructors';

export const g = svg.selectAll('g.group')
  .data(chord(matrix).groups)
  .enter().append('svg:g')
  .attr('class', (d) => 'group ' + NameProvider[d.index]);
