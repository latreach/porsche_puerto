import * as d3 from 'd3';
import {margin, height, width} from './constants';

export const svg = d3.select('#exponencial')
	.append("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

