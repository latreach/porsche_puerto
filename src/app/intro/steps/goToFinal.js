/**
 * Skip vizualization to final step
 */
import * as d3 from 'd3';
import {finalChord} from '../draws';

d3.select('#skip').on('click', finalChord);
