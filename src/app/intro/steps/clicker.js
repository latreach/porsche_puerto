/**
 * Clicker handler for steps visualization
 */
import * as d3 from 'd3';
import {draw1, draw2} from '../draws';

export let step = 1;

d3.select('#clicker').on('click', () => {
  switch (step) {
    default:
    case 1:
      draw1();
      break;
    case 2:
      draw2();
      break;
  }
  ++step;
});
