import {parseTime} from './parsetime';
export default function type(d, _, columns){
	d.date = parseTime(d.linear);
	for (var i = 1, n = columns.length, c; i < n; ++i)
	d[c = columns[i]] = +d[c];
	return d;
};



