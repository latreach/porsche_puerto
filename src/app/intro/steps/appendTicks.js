import {ticks} from '../ticks';

ticks.append('svg:line')
  .attr('x1', 1)
  .attr('y1', 0)
  .attr('x2', 5)
  .attr('y2', 0)
  .attr('class', 'ticks')
  .style('stroke', '#fff');
