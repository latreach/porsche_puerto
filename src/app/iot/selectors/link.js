import {svg} from './svg';
import {links} from '../network';

export const link = svg.selectAll('path.link')
  .data(links, (d) => d.id + '-&gt;' + d.parent.id);
