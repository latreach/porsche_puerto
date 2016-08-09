import {line} from 'd3';

export const line = line()
	.x((d) => x(d.date))
	.y((d) => y(d.close));

