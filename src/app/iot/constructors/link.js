import {svg} from './svg';
import {links} from './links';

export const link = svg.selectAll('path.link')
  .data(links, (d) => d.id + '-&gt;' + d.parent.id);
