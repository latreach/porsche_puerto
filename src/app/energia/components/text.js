import {svg} from './svg';
import {nodes, root} from './root';

export const text = svg.selectAll('text')
  .data(nodes).enter().append('text')
    .attr('class', 'label')
    .style('display', (d) => d.parent === root ? 'inline' : 'none')
    .text((d) => d.id);
