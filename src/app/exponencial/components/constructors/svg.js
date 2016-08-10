import {svg} from './constants';
import {line_1, line_2} from '../line';
import {data} from '../linear'
import {g} from './constants';

export const lineares = g.selectAll(".linear")
  .data(data)
  .enter().append("g")
  .attr("class", "city");

lineares.append("path")
  .attr("class", "line")
  .attr("d", (d) => line1(d.values))

