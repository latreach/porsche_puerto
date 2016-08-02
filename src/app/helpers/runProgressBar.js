/**
 * Run the progress bar during an animation
 * @param {int} time
 * @return void
 */
import d3 from 'd3';
import {default as endAll} from './endAll';
export default function (time) {
  // Make the progress div visible
  d3.selectAll('#progress')
    .style('visibility', 'visible');

  // Linearly increase the width of the bar
  // After this is done, hide div again
  d3.selectAll('.prgsFront')
    .transition().duration(time).ease('linear')
    .attr('width', prgsWidth) // TODO: pgrsWidth?? find variable
    .call(endAll, () => {
      d3.selectAll('#progress')
        .style('visibility', 'hidden');
    });
}
