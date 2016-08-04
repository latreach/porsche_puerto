/**
 * Skip vizualization to final step
 */
import * as d3 from 'd3';
import {finalChord} from '../draws';
// import {finalChord} from './finalChord';
d3.select('#skip').on('click', () => finalChord);
