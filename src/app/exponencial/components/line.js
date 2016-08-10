import {line, curveBasis} from 'd3';

export const line_1 = line()
	.curve(curveBasis)
	.x(function(d){return x(d.tiempo);})
	.y(function(d){return y(d.linear);});

export const line_2 = line()
	.curve(curveBasis)
	.x(function(d){return x(d.tiempo);})
	.y(function(d){return y(d.nolineal);});



