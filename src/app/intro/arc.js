/**
 * Outer arcs
 */
import {svg} from 'd3';
import {innerRadius, outerRadius} from './constants';

export const arc = svg.arc()
  .innerRadius(innerRadius)
  .outerRadius(outerRadius);
