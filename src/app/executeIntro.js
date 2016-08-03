import {g, ticks} from './intro';
import {NameProvider, innerRadius, progressWidth, progressHeight, progressColor, progressClass} from './intro/constants';
import {progressBar} from './intro';

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
        'translate(' + (innerRadius + 55) + ')' + (d.angle > Math.PI ? 'rotate(180)' : '');
  })
  .attr('opacity', 0)
  .text((_, i) => NameProvider[i]);

ticks.append('svg:line')
  .attr('x1', 1)
  .attr('y1', 0)
  .attr('x2', 5)
  .attr('y2', 0)
  .attr('class', 'ticks')
  .style('stroke', '#FFF');

ticks.append('svg:text')
  .attr('x', 8)
  .attr('dy', 0.35 + 'em')
  .attr('class', 'tickLabels')
  .attr('transform', (d) => {
    return d.angle > Math.PI ? 'rotate(180)translate(-16)' : null;
  })
  .style('text-anchor', (d) => d.angle > Math.PI ? 'end' : null)
  .text((d) => d.label)
  .attr('opacity', 0);

g.append('svg:text')
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

progressBar.selectAll('rect')
  .data([progressWidth, 0])
  .enter().append('rect')
  .attr('class', (_, i) => progressClass[i])
  .attr('x', 0)
  .attr('y', 0)
  .attr('width', (d) => d)
  .attr('height', progressHeight)
  .attr('fill', (_, i) => progressColor[i]);

