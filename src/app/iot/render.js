import {node} from './selectors';
import {nodes} from './network';
import {
  createCircles,
  createText,
  exitText,
  exitCircles,
  duration,
  updateNodes
} from './helpers';

export function render (source, bootstrap) {
  console.log(source);
  if (bootstrap !== true) {
    if (source.children && bootstrap) {
      source._children = source.children;
      source.children = null;
    } else {
      source.children = source._children;
      source._children = null;
    }
  }

  const nodeEnter = node.enter().append('g')
    .attr('class', 'node')
    .attr(
      'transform',
      'translate(' + source.y0 + ',' + source.x0 + ')'
    )
    .on('click', render);

  nodeEnter
      .call(createCircles)
      .call(createText)
      .call(updateNodes);

  node.exit()
    .transition().duration(duration)
      .attr('transform', 'translate(' + source.y + ',' + source.x + ')')
      .remove()
    .call(exitCircles)
    .call(exitText);

  nodes.forEach(function (d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });
}
