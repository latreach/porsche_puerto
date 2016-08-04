import {progressBar} from '../progressBar';
import {progressWidth, progressClass, progressHeight, progressColor} from '../constants';

progressBar.selectAll('rect')
  .data([progressWidth, 0])
  .enter().append('rect')
    .attr('class', (_, i) => progressClass[i])
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', (d) => d)
    .attr('height', progressHeight)
    .attr('fill', (_, i) => progressColor[i]);
