import {g} from '../g';
import {innerRadius, NameProvider} from '../constants';

g.append('svg:g')
  .each((d) => {
    d.angle = (d.startAngle + d.endAngle) / 2;
    return d.angle;
  })
  .attr('dy', 0.35 + 'em')
  .attr('class', 'titles')
  .attr('text-anchor', (d) => d.angle > Math.PI ? 'end' : null)
  .attr('transform', (d) => {
    return 'rotate(' + (d.angle * 180 / Math.PI - 90) + ')' +
        'translate(' + (innerRadius + 55) + ')' +
        (d.angle > Math.PI ? 'rotate(180)' : '');
  })
  .attr('opacity', 0)
  .text((_, i) => NameProvider[i]);
