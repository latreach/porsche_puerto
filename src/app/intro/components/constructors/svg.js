/**
 * Initialize the SVG
 */
import * as d3 from 'd3';
import {margin, width, height} from './constants';

export const svg = d3.select('#intro-animation')
  .append('div')
    .attr('class', 'svg-container')
  .append('svg')
    .attr(
      'viewBox',
      [0, 0, window.innerWidth, window.innerHeight - 55].join(' ')
    )
    .attr('preserveAspectRatio', 'xMidYMid meet')
    .attr('class', 'svg-content-responsive')
  .append('g')
    .attr(
      'transform',
      'translate(' +
        (margin.left + width / 2) + ',' +
        (margin.top + height / 2) +
      ')'
    );
