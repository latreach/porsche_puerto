//import {hierarchy} from 'd3';
import * as d3 from 'd3';
import {height, width, margin, arbol} from './constants';
import {update} from './update';

export const root = d3.hierarchy(arbol, (d) =>  d.children);

