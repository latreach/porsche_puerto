import {width, height, margin} from './constants';
export const packer = d3.pack()
  .size([width - margin, height - margin]);
