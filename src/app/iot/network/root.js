import phylo from './flare.json';
import {height, collapse} from '../helpers';
export const root = d3.hierarchy(phylo, (d) => d.children);
root.x0 = height / 2;
root.y0 = 0;
root.children.forEach(collapse);
