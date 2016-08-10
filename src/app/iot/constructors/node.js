import {svg} from './svg';
import {nodes} from './nodes';

export const node = svg.selectAll('g.node')
  .data(nodes, (d) => d.id || (d.id = ++i));
