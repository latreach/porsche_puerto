import {svg} from './selectors';
import {root, tree} from './network';
import {
  createCircles,
  createText,
  exitText,
  exitCircles,
  duration,
  updateNodes,
  connector
} from './helpers';

export function render (source) {
  const nodes = tree(root).descendants();
  const links = nodes.slice(1);

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
    .on('click', function (d) {
      if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
      render(d);
    })
    .call(createCircles)
    .call(createText);

  node.merge(nodeEnter).call(updateNodes);
  node.exit()
    .transition().duration(duration)
      .attr('transform', 'translate(' + source.y + ',' + source.x + ')')
      .remove()
    .call(exitCircles)
    .call(exitText);

  const link = svg.selectAll('path.link')
    .data(links, (d) => d.id + '-&gt;' + d.parent.id);

  link.transition().duration(duration)
    .attr('d', connector);

  const linkEnter = link.enter().insert('path', 'g')
    .attr('class', 'link')
    .attr('d', () => connector({x: source.x0, y: source.y0, parent: {x: source.x0, y: source.y0}}))
    .style('fill', 'none')
    .style('stroke', '#ccc')
    .style('stroke-width', 1.5 + 'px');

  link.merge(linkEnter).transition().duration(duration)
    .attr('d', connector);

  link.exit().transition().duration(duration)
    .attr('d', () => connector({x: source.x, y: source.y, parent: {x: source.x, y: source.y}}))
    .remove();

  nodes.forEach(function (d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });
}
