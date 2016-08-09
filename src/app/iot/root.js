import {arbol} from './constants';

export const root = d3.hierarchy(arbol, (d) => d.children);
