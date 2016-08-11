import {node, circle} from '../components';
import {diameter, view} from './constants';

export function zoomTo (v) {
  const k = diameter / v[2];

  // view = v; // TODO: Check circular dependency
  node.attr('transform', (d) => {
    return 'translate(' + (d.x - v[0]) * k + ',' + (d.y - v[1]) * k + ')';
  });

  circle.attr('r', (d) => d.r * k);
}
