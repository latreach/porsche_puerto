import {diameter, margin} from './constants';
import {nodes} from './nodes';
import {color} from './color';
import {zoom, zoomTo} from './zoom';

export const svg = d3.select('#energia-animation')
  .append('svg')
    .attr('width', diameter)
    .attr('height', diameter)
  .append('g')
    .attr('transform', 'translate(' + diameter / 2 + ',' + diameter / 2 + ')');

svg.selectAll('circle')
  .data(nodes).enter().append('circle')
  .attr('class', (d) => d.parent ? d.children ? 'node' : 'node leaf' : 'node root')
  .attr('transform', (d) => 'translate(' + (d.x - diameter / 2) + ',' + (d.y - diameter / 2) + ')')
  .attr('r', (d) => d.r)
  .style('fill', (d) => d.children ? color(d.depth) : '#fff')
  .on('click', zoom);

svg.selectAll('text')
  .data(nodes).enter().append('text')
  .attr('class', 'label')
  .attr('transform', (d) => 'translate(' + (d.x - diameter / 2) + ',' + (d.y - diameter / 2) + ')')
  .style('fill', 'red')
  .style('text-anchor', 'middle')
  .style('fill-opacity', (d) => d.depth === 1 ? 1 : 0)
  .style('display', (d) => d.depth === 1 ? 'inline' : 'none')
  .style('text-shadow', '0 1px 0 #fff, 1px 0 0 #fff, -1px 0 0 #fff, 0 -1px 0 #fff')
  .text((d) => d.data.name);
