import phylo from './data.json';

export const root = d3.hierarchy(phylo, (d) => d.children);
