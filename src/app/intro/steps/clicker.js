/**
 * Clicker handler for steps visualization
 */
import * as d3 from 'd3';
import {draw1} from '../draws';

let step = 1;
d3.select('#clicker').on('click', () => {
  switch (step) {
    default: {
      draw1();
    }
  }
  ++step
});
