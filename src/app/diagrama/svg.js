import * as d3 from 'd3';
import{width, margin, height } from './constants';

export const svg = d3.select('#diagrama').append("svg:svg")
	.attr("width", width + margin.right + margin.left)
	.attr("height", height + margin.top + margin.bottom )
	.append("svg:g")
	.attr("transform", "translate("+ margin.left + "," + margin.top + ")");


