/**
 * Initialize the SVG
 */
import d3 from 'd3';
import {margin, width, height} from './constants';
export const svg = d3
  .select('#chart')
  .append('svg:svg')
  .attr('width'. width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
    .append('svg:g')
  .attr(
    'transform',
    'translate(' + (margin.left + width / 2) + ',' + (margin.top + height / 2) + ')'
  );
