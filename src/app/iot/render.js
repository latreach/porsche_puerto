import {node} from './selectors';
import {
  createNodes,
  createText,
  updateNodes
} from './helpers';

export function render (source) {
  /*
  if (source.children) {
    source._children = source.children;
    source.children = null;
  } else {
    source.children = source._children;
    source._children = null;
  }
  */

  node.enter().append('g')
      .attr('class', 'node')
      .attr(
        'transform',
        'translate(' + source.y0 + ',' + source.x0 + ')'
      )
      .on('click', render)
      .call(createNodes)
      .call(createText)
      .call(updateNodes);

  // node.enter().call(updateNode);

  /*
  node.exit().call(exitNode, source);
  nodes.forEach(function (d) {
    d.x0 = d.x;
    d.y0 = d.y;
    });
  */
}
