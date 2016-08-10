import {nodeEnter} from './selectors';
import {enterNode} from './helpers';

export function render (source) {
  nodeEnter.call(enterNode, source);

  /*
  nodes.forEach(function (d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });
  */
}
