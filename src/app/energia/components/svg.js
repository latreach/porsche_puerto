import {zoom, color, diameter} from '../helpers';

export const svg = d3.select('#energia-animation')
    .style('background', color(-1))
    .on('click', zoom(focus))
  .append('svg')
    .attr('width', diameter)
    .attr('height', diameter)
    .append('g')
    .attr('transform', 'translate(' + diameter / 2 + ',' + diameter / 2 + ')');
