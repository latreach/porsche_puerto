import {scaleLinear} from 'd3';
import {height} from '/constructors'

export const y = scaleLinear().
	.range([height,0]);

