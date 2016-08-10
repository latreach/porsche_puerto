import {tree} from './tree';
import {root} from './root';

export const nodes = tree(root).descendants();
nodes.forEach(function (d) {
  d.y = d.depth * 180;
});
