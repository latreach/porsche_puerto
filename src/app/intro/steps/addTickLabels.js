import {ticks} from '../ticks';

ticks.append('svg:text')
  .attr('x', 8)
  .attr('dy', 0.35 + 'em')
  .attr('class', 'tickLabels')
  .attr('transform', (d) => d.angle > Math.PI ? 'rotate(180)translate(-16)' : null)
  .style('text-anchor', (d) => d.angle > Math.PI ? 'end' : null)
  .text((d) => d.label)
  .attr('opacity', 0);
