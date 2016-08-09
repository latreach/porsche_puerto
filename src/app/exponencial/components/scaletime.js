import {scaleTime} from 'd3';
import {width} from './constructors';
export const x = scaleTime()
	.range([0,width]);
