/**
 * Draw the original chord diagram
 */
import * as d3 from 'd3';
import {g} from '../g';
import {changeTopText, changeBottomText, fade} from '../helpers';
import {step} from '../steps';
import {fill} from '../constants';
import {arc} from '../arc';
import {svg} from '../svg';
import {chords} from '../chords';

export function finalChord () {
  // Remove button
  d3.select('#clicker').style('visibility', 'hidden');
  d3.select('#skip').style('visibility', 'hidden');
  d3.select('#progress').style('visibility', 'hidden');

  // Remove texts
  changeTopText('', 0, 0, 1);
  changeBottomText('', 0, 0, 1);

  // Create arcs or show them, depending on the point in the visual
  if (step <= 4) {
    g.append('svg:path')
      .style('stroke', (d) => fill(d.index))
      .style('fill', (d) => fill(d.index))
      .attr('d', arc)
      .style('opacity', 0)
      .transition().duration(1000)
      .style('opacity', 1);
  } else {
    // Make all arc visible
    svg.selectAll('g.group').select('path')
      .transition().duration(1000)
      .style('opacity', 1);
  }

  // Make mouse over and out possible
  d3.selectAll('.group')
    .on('mouseover', fade(0.02))
    .on('mouseout', fade(0.80));

  // Show all chords
  chords.transition().duration(1000)
    .style('opacity', 1);

  // Show all the text
  d3.selectAll('g.group').selectAll('line')
    .transition().duration(100)
    .style('stroke', '#000');

  // Same for the %'s
  svg.selectAll('g.group')
    .transition().duration(100)
    .selectAll('.tickLabels').style('opacity', 1);

  // And the names of each arc
  svg.selectAll('g.group')
    .transition().duration(100)
    .select('.titles').style('opacity', 1);
}
