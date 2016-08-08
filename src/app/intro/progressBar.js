/*
 * SVG to visualize progress bar
 */
import * as d3 from 'd3';
import {progressWidth, progressHeight} from './constants';

export const progressBar = d3.select('#progress').append('svg')
  .attr('width', progressWidth)
  .attr('height', 3 * progressHeight);
