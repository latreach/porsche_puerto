/**
 * Groups for chord diagram
 */
import {svg} from './svg';
import {chord} from './chord';
import {NameProvider, matrix} from './constants';

export const g = svg
  .selectAll('g.group')
  .data(chord(matrix).groups)
  .enter().append('svg:g')
  .attr('class', (d) => 'group' + NameProvider[d.index]);
