import * as d3 from 'd3';

export const margin = {top: 20, right:80, bottom:30, left:50};
export const width  = 1500 -margin.left - margin.right;
export const height = 800 - margin.top -margin.bottom;
export const svg = d3.select("#diagrama").append("svg")
  .attr("width", width + margin.right  + margin.left)
  .attr("height", height + margin.top + margin.bottom);

export const g = svg.append("g").attr("transform", "translate(" + 
	margin.left + "," + margin.top + ")" );


	
