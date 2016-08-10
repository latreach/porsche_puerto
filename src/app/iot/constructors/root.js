import phylo from './data.json';
import {height} from './constants';
import {collapse} from '../helpers';

export const root = d3.hierarchy(phylo, (d) => d.children);

let i = 0;

root.each(function (d) {
  d.name = d.id;
  d.id = ++i;
});

root.x0 = height / 2;
root.y0 = 0;

root.children.forEach(collapse);
