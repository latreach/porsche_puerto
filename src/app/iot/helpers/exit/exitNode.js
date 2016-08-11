import {duration} from './constants';
import {exitCircles} from './exitCircles';

export function exitNode (selector, source) {
  selector
    .transition().duration(duration)
      .attr(
        'transform',
        'translate(' + source.y + ',' + source.x + ')'
      )
      .remove()
    .call(exitCircles);
}
