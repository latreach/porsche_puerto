import graph from './data.json';
import {mainContainer} from '../constructors';

export const node = mainContainer.selectAll('.node')
  .data(graph.nodes).enter().append('circle')
    .attr('class', 'node')
    .attr('r', 12)
    .attr('fill', 'transparent')
    .attr('cx', (d) => d.x - 480)
    .attr('cy', (d) => d.y - 280)
  .transition().duration(1000).delay(1000)
    .attr('fill', 'white');
