/**
 * Initialize chord diagram
 */
import {chord, descending} from 'd3';
import {matrix} from './constants';
export const Chord = chord(matrix)
  .padAngle(0.04)
  .sortSubgroups(descending)
  .sortChords(descending);
