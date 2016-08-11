import {duration} from '../helpers';
import {click} from './click';

function updateCircles (selector) {
  selector.select('circle')
    .attr('r', 4.5)
    .style('fill', (d) => d._children ? 'lightsteelblue' : '#fff')
    .style('stroke', 'steelblue')
    .style('stroke-width', 1.5 + 'px');
}

function updateNode (selector) {
  selector
    .transition().duration(duration)
    .attr('transform', function (d) {
      return 'translate(' + d.y + ',' + d.x + ')';
    })
    .call(updateCircles);
}

function createNodes (selector) {
  selector.append('circle')
    .attr('r', 1e-6)
    .style('fill', function (d) {
      return d._children ? 'lightsteelblue' : '#fff';
    })
    .style('stroke', 'lightsteelblue')
    .style('stroke-width', 0);
}

export function enterNode (selector, source) {
  const nodes = selector
    .append('g')
      .attr('class', 'node')
      .attr('transform', function () {
        return 'translate(' + source.y0 + ',' + source.x0 + ')';
      })
      .on('click', click)
    .call(createNodes);
    // .call(updateNode);
}
