import graph from './data.json';
import {mainContainer} from '../constructors';

graph.links.map((d) => {
  d.x1 = graph.nodes[d.source].x - 480;
  d.y1 = graph.nodes[d.source].y - 280;
  d.x2 = graph.nodes[d.target].x - 480;
  d.y2 = graph.nodes[d.target].y - 280;
});

export const link = mainContainer.selectAll('.link')
  .data(graph.links).enter().append('line')
    .attr('class', 'link')
    .attr('x1', (d) => d.x1)
    .attr('y1', (d) => d.y1)
    .attr('x2', (d) => d.x2)
    .attr('y2', (d) => d.y2)
    .style('stroke', 'transparent')
    .each(function (d, i) {
      d3.select(this)
        .transition().duration(1000).delay(1000 + i * 100)
        .style('stroke', 'white');
    });
