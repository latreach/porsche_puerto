import {svg} from './selectors';
import {root, tree} from './network';
import {
  createCircles,
  createText,
  exitText,
  exitCircles,
  duration,
  updateNodes
} from './helpers';

export function render (source) {
  if (source.children) {
    source._children = source.children;
    source.children = null;
  } else {
    source.children = source._children;
    source._children = null;
  }

  const nodes = tree(root).descendants();

  nodes.forEach(function (d, i) {
    d.y = d.depth * 180;
    d.id = i;
  });

  const node = svg.selectAll('g.node')
    .data(nodes, (d) => d.id);

  const nodeEnter = node.enter().append('g')
    .attr('class', 'node')
    .attr(
      'transform',
      'translate(' + source.y0 + ',' + source.x0 + ')'
    )
    .on('click', render);

  nodeEnter.call(createCircles);
  nodeEnter.call(createText);
  nodeEnter.call(updateNodes);

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
