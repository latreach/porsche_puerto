/**
 * Ordinal color palette
 */
import {scaleOrdinal, range} from 'd3';
import {NameProvider, colors} from './constants';

export const fill = scaleOrdinal()
  .domain(range(NameProvider.length))
  .range(colors);
