import phylo from './flare';
import {packer} from './packer';

export const root = d3.hierarchy(phylo, (d) => d.children)
  .sum((d) => d.size);
packer(root);
