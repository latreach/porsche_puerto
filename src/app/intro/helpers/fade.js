/**
 * Returns an event handler for fading a given chord group
 */
import {svg} from '../components';

export function fade (opacity) {
  return function (_, i) {
    svg.selectAll('path.chord')
      .filter((d) => d.source.index !== i && d.target.index !== i)
      .transition()
      .style('stroke-opacity', opacity)
      .style('fill-opacity', opacity);
  };
}
