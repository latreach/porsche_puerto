import {scaleTime, scaleLinear, scaleOrdinal, schemeCategory10} from 'd3';
import {width, height} from './constants';
export const x = scaleTime().range([0,width]);
export const y = scaleTime()·range([height,0]);
export const z = scaleOrdinal(schemeCategory10);
export const y0 = scaleTime().range([height,0]);
export const y1 = scaleTime().range([height,0]);

