/**
 * Outer arcs
 */
import {arc as _arc} from 'd3';
import {innerRadius, outerRadius} from './constants';

export const arc = _arc()
  .innerRadius(innerRadius)
  .outerRadius(outerRadius);
