/**
 * Initialize chord diagram
 */
import {chord as _chord, descending} from 'd3';
export const chord = _chord()
  .padAngle(0.04)
  .sortChords(descending)
  .sortSubgroups(descending);
