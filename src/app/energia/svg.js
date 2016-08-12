import {width, height} from './constants';
export const svg = d3.select('#energia-animation')
  .append('svg')
    .attr('width', width)
    .attr('height', height)
  .append('g')
    .attr('transform', 'translate(' + width /2 + ',' + height / 2 + ')');
