import {zoomTo} from './zoomTo';
import {margin} from './constants';

export function zoom () {
  // focus = d;
  const transition = d3.transition.duration(d3.event.altKey ? 7500 : 750)
    .tween('zoom', function () {
      const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin]);

      return function (t) {
        zoomTo(i(t));
      };
    });

  transition.selectAll('text')
    .filter(function (s) {
      return s.parent === focus || this.style.display === 'inline';
    })
    .style('fill-opacity', (s) => s.parent === focus ? 1 : 0)
    .each('start', (s) => {
      if (s.parent === focus) {
        this.style.display = 'inline';
      }
    })
    .each('end', (s) => {
      if (s.parent !== focus) {
        this.style.display = 'none';
      }
    });
}
