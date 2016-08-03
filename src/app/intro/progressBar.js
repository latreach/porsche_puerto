/*
 * SVG to visualize progress bar
 */
import * as d3 from 'd3';
import {progressWidth, progressHeight} from './constants';
export const progressBar = d3.select('#progress')
  .append('width', progressWidth)
  .append('height', progressHeight);
