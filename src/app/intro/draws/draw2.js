/**
 * Show Arc of Apple
 */
import * as d3 from 'd3';
import {
  stopClicker, runProgressBar, changeTopText, changeBottomText
} from '../helpers';
import {g} from '../g';
import {fill} from '../constants';
import {arc} from '../arc';

export function draw2 () {
  // First disable click event on clicker button
  stopClicker();

  // Show and run the progressBar
  runProgressBar(700 * 2);

  // Initiate all arcs but only show the Apple arc (d.index = 0)
  g.append('svg:path')
    .style('stroke', (d) => fill(d.index))
    .style('fill', (d) => fill(d.index))
    .transition().duration(700)
    .attr('d', arc)
    .attrTween('d', function (d) {
      if (d.index === 0) {
        const i = d3.interpolate(d.startAngle, d.endAngle);

        return function (t) {
          d.endAngle = i(t);
          return arc(d);
        };
      }
      return function () {};
    });

  // Show the tick around the Apple arc
  d3.selectAll('.titles')
    .transition().duration(2000)
    .attr('opacity', (d) => d.index ? 0 : 1);

  // Switch text
  changeTopText(`
      According to the survey 19% owns an iPhone as ther main phone
  `, 1 / 2, 0, 1, true);

  changeBottomText('', 0 / 2, 0, 1);
}
