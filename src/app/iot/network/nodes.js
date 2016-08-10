import {tree} from './tree';
import {root} from './root';
export const nodes = tree(root).descendants();
nodes.forEach(function (d, i) {
  d.y = d.depth * 180;
  d.id = i;
});
