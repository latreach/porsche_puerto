import data from '../datos/linear.csv';
import {parseTime} from './parsetime';


data.forEach(function(d){
	d.tiempo = parseTime(d.tiempo);
	d.linear = +d.linear;
	d.nolineal = +d.nolineal;

}

export const data;
