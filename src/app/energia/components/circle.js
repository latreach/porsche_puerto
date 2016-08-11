import {svg} from './svg';
import {nodes} from './root';
import {color, zoom} from '../helpers';

export const circle = svg.selectAll('circle')
  .data(nodes).enter().append('circle')
  .attr('class', (d) => d.parent ? d.children ? 'node' : 'node node--leaf' : 'node node--root')
  .style('fill', (d) => d.children ? color(d.depth) : null);
  /*
  .on('click', function (d) {
    if (focus !== d) {
      zoom(d);
      d3.event.stopPropagation();
    }
  });
  */
