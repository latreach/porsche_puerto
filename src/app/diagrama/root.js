import {hierarchy} from 'd3';
import {height, width, margin, arbol} from './constants';
import {update} from './update';

export const root = hierarchy(arbol, (d) =>  d.children);

