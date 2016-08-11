import {duration} from '../constants';
import {updateCircles} from './updateCircles';
import {updateText} from './updateText';

export function updateNodes (selector) {
  selector
    .transition().duration(duration)
    .attr('transform', function (d) {
      return 'translate(' + d.y + ',' + d.x + ')';
    })
  .call(updateCircles)
  .call(updateText);
}
