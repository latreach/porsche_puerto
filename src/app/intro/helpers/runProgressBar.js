/**
 * Run the progress bar during an animation
 * @param {int} time
 * @return void
 */
import * as d3 from 'd3';
import {default as endAll} from './endAll';
import {progressWidth} from '../steps/constants';

export default function (time) {
  // Make the progress div visible
  d3.selectAll('#progress')
    .style('visibility', 'visible');

  // Linearly increase the width of the bar
  // After this is done, hide div again
  d3.selectAll('.prgsFront')
    .transition()
    .duration(time)
    .ease(d3.easeLinear)
    .attr('width', progressWidth)
    .call(endAll, function () {
      d3.selectAll('#progress')
        .style('visibility', 'hidden');
    });
}
