import {margin, diameter} from './constants';
import {svg} from './svg';
import {nodes} from './nodes';

let currentView = [
  nodes[0].x,
  nodes[0].y,
  nodes[0].r
];

export function zoomTo (view) {
  const k = diameter / view[2];

  currentView = view;
  svg.selectAll('text,circle')
    .attr('transform', (d) => {
      return 'translate(' +
          (d.x - view[0]) * k + ',' +
          (d.y - view[1]) * k +
        ')';
    });

  svg.selectAll('circle')
    .attr('r', (d) => d.r * k);
}

export function zoom (focus) {
  const interpolation = d3.interpolateZoom(
    currentView,
    [focus.x, focus.y, focus.r * 2 + margin]
  );

  d3.transition().duration(750)
    .tween('zoom', () => {
      return function (t) {
        zoomTo(interpolation(t));
      };
    });

  svg.selectAll('text')
    .filter(function (d) {
      return d.parent === focus || this.style.display === 'inline';
    })
    .style('fill-opacity', (d) => d.parent === focus ? 1 : 0)
    .each(function (d) {
      if (d.parent === focus) {
        this.style.display = 'inline';
      } else {
        this.style.display = 'none';
      }
    });
}
