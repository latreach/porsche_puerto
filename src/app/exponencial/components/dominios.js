import {data} from  './linear';
import {x,y,z, y0, y1} from './constructors';

x.domain(d3.extent(data), (d)=> d.tiempo);
y0.domain([0,d3.max(data, (d)=> Math.max(d.linear))]);
y1.domain([0,d3.max(data, (d)=> Math.max(d.nolineal))]);
export const x;
export const y0;
export const y1:

export const y1:




