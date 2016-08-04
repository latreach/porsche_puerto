/**
 * Initiate inner chords
 */
import {rgb, svg as _svg} from 'd3';
import {svg} from './svg';
import {fill, matrix, innerRadius} from './constants';
import {chord} from './chord';

export const chords = svg.selectAll('path.chord')
  .data(chord(matrix))
  .enter().append('svg:path')
  .attr('class', 'chord')
  .style('stroke', (d) => rgb(fill(d.source.index).darker()))
  .style('fill', (d) => fill(d.source.index))
  .attr('d', _svg.chord().radius(innerRadius))
  .attr('opacity', 0);
