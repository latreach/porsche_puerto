/**
 * Stop clicker from working
 */
import d3 from 'd3';
export default function () {
  d3.select('#clicker')
    .style('pointer-events', 'none')
    .transition().duration(400)
    .style('border-color', '#d3d3d3')
    .style('color', '#d3d3d3');
}
