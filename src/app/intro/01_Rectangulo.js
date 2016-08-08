import {svg} from './components';

svg
  .append('rect')
  .attr('class', 'intro-center')
  .attr('width', 0.3 * window.innerHeight)
  .attr('height', 0.3 * window.innerHeight)
  .attr('fill', 'red')
  .attr('stroke', 'black')
  .attr('x', window.innerWidth / 2 - 0.15 * window.innerHeight)
  .attr('y', window.innerHeight / 2 - 0.15 * window.innerHeight - 56);
