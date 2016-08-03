/**
 * Clicker handler for steps visualization
 */
import * as d3 from 'd3';
import {step} from './constants';
import {draw1} from '../draws';
d3.select('#clicker').on('click', () => {
  switch (step) {
    default: {
      draw1();
    }
  }
});
