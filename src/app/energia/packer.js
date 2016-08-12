import {diameter, margin} from './constants';
export const packer = d3.pack()
  .size([diameter - margin, diameter - margin]);
