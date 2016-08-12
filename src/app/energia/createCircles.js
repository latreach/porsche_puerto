import {color} from './color';
export function createCircles (selector) {
  selector.append('circle')
    .attr(
      'class',
      (d) => d.parent ? d.children ? "node" : "node node--leaf" : "node node--root"
    )
  .style('fill', (d) => d.children ? color(d.depth) : null)
}
