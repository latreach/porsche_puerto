import {nodes} from '../network';
import {svg} from './svg';

export const node = svg.selectAll('g.node')
  .data(nodes, (d) => d.id);
