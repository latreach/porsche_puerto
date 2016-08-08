/**
 * Initiate inner chords
 */
import * as d3 from 'd3';
import {svg, fill, matrix, innerRadius, chord} from './constructors';

export const chords = svg.selectAll('path.chord')
  .data(chord(matrix))
  .enter().append('svg:path')
  .attr('class', 'chord')
  .style('stroke', (d) => d3.rgb(fill(d.source.index)).darker())
  .style('fill', (d) => fill(d.source.index))
  .attr('d', d3.ribbon().radius(innerRadius))
  .attr('opacity', 0);
