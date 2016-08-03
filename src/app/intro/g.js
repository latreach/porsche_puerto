/**
 * Groups for chord diagram
 */
import {svg} from './svg';
import {Chord} from './chord';
import {NameProvider} from './constants';
export const g = svg
  .selectAll('g.group')
  .data(Chord.groups)
  .enter().append('svg:g')
  .attr('class', (d) => 'group' + NameProvider[d.index]);
