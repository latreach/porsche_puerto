/**
 * Constants for intro animation
 */
import {scaleOrdinal, range} from 'd3';
export const NameProvider = [
  'Apple',
  'HTC',
  'Huawei',
  'LG',
  'Nokia',
  'Samsung',
  'Sony',
  'Other'
];

export const matrix = [
  [9.6899, 0.8859, 0.0554, 0.443, 2.5471, 2.4363, 0.5537, 2.5471],  // Apple 19.1584
  [0.1107, 1.8272, 0, 0.4983, 1.1074, 1.052, 0.2215, 0.4983],  // HTC 5.3154
  [0.0554, 0.2769, 0.2215, 0.2215, 0.3876, 0.8306, 0.0554, 0.3322],  // Huawei 2.3811
  [0.0554, 0.1107, 0.0554, 1.2182, 1.1628, 0.6645, 0.4983, 1.052],  // LG 4.8173
  [0.2215, 0.443, 0, 0.2769, 10.4097, 1.2182, 0.4983, 2.8239],  // Nokia 15.8915
  [1.1628, 2.6024, 0, 1.3843, 8.7486, 16.8328, 1.7165, 5.5925],  // Samsung 38.0399
  [0.0554, 0.4983, 0, 0.3322, 0.443, 0.8859, 1.7719, 0.443],  // Sony 4.4297
  [0.2215, 0.7198, 0, 0.3322, 1.6611, 1.495, 0.1107, 5.4264] // Other 9.9667
];

export const colors = [
  '#C4C4C4',
  '#69B40F',
  '#EC1D25',
  '#C8125C',
  '#008FC8',
  '#10218B',
  '#134B24',
  '#737373'
];

export const fill = scaleOrdinal()
  .domain(range(NameProvider.length))
  .range(colors);

export const margin = {
  top: 20,
  right: 25,
  bottom: 20,
  left: 25
};

export const height = 650 - margin.top - margin.bottom;
export const width  = 700 - margin.left - margin.right;
export const innerRadius = Math.min(width, height) * 0.39;
export const outerRadius = innerRadius * 1.04;
export const progressColor = ['#d1d1d1', '#949494'];
export const progressClass = ['prgsBehind', 'pgrsFront'];
export const progressWidth = 0.4 * 650;
export const progressHeight = 3;
