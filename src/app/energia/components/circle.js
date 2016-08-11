import {svg, color} from './constants';
import {nodes} from './components';
export  circle = svg.selectAll("circle")
    .data(nodes)
   .enter().append("circle")
  .attr("class", function(d){return d.parent ? d.children ? "node": "node n    ode--leaf": "node node--root";})
 .style("fill", function(d){return d.children ? color(d.depth): null;})
.on("click", function(d){if (focus !==d)zoom(d), d3.event.stopPropagation();}); 



