import {diameter, margin} from './constants';
export const pack = d3.pack()
  .size([diameter - margin, diameter - margin])
  .padding(100);
