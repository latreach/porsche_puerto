//import {select} from 'd3';
import * as d3 from 'd3';
import {height, width, margin} from './constants';
import {root} from './root';
import {collapse} from './collapse';
import {update} from '/update';

root.each((d) => d.name = d.id
		d.id = i
		i++;);

root.x0 = (height/2)+ 1;
root.y0 = 0;

root.children.forEach(collapse)
update(root);

d3.select(self.frameElement).style("height", "1500px");


