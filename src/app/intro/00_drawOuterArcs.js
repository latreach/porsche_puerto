import {g, arc, fill} from './components';

g.append('svg:path')
  .attr('class', 'arc')
  .style('stroke', (d) => fill(d.index))
  .style('fill', (d) => fill(d.index))
  .attr('d', arc)
  .style('opacity', 0)
  .transition().duration(1000)
  .style('opacity', 0.4);